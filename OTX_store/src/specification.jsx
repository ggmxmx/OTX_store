function Specification({ specification }) {
    return (
        <ul>
            {specification.map((specification, idx) => (
                <li key={idx}>{specification}</li>
            ))}
        </ul>
    );
}
    
    export default Specification;