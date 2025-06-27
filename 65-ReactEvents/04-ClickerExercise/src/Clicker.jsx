function handleClick() {
  console.log("Clicked the button");
}

function handleMouseOver() {
  console.log("Moused over");
}

export default function Clicker() {
  return (
    <div>
      <p>Click the button</p>
      <button onClick={handleClick} onMouseOver={handleMouseOver}>
        Click
      </button>
    </div>
  );
}
