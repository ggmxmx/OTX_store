function Specification({ specification }) {
    return (
        <ul>
            {specification.map((specification, idx) => (
                <li key={idx}>{specification}
                <br /></li>
            ))}
        </ul>
    );
}
    
    export default Specification;