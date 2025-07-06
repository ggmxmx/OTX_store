function Features({ features }) {
  return (
    <ul>
      {features.map((feature, idx) => (
        <li key={idx}>{!feature? "no features" : feature}</li>
      ))}
    </ul>
  );
}

export default Features;