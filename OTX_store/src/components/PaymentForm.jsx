
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const PaymentForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const { data: { clientSecret } } = await fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    }).then(r => r.json());

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={processing || succeeded}>
        {processing ? 'Processing...' : 'Pay'}
      </button>
      {error && <div>{error}</div>}
      {succeeded && <div>Payment succeeded!</div>}
    </form>
  );
};

export default PaymentForm;
