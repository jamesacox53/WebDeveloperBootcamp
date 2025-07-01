import './Button.css';

export default function Button({textStr = 'Click Me', clickFunc}) {
    return (
        <button className="Button" onClick={clickFunc}>
            {textStr}
        </button>
    );
}