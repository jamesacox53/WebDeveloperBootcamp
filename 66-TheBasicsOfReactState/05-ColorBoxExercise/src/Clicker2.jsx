function handleClick(message) {
    alert(message);
}

export default function Clicker2({ message, buttonText }) {
    return <button onClick={() => handleClick(message)}>{buttonText}</button>
}