import './Die.css';

export default function Die({ valInt, colorStr = 'slateblue' }) {
    const styleObj = {
        backgroundColor: colorStr
    };
    
    return (
        <div className="Die" style={styleObj}>
            {valInt}
        </div>
    );
}