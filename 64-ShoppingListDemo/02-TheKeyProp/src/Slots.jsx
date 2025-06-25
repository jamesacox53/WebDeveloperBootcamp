export default function Slots({ val1, val2, val3 }) {
  const isEqual = val1 === val2 && val2 === val3;

  return (
    <div>
      <h1>
        {val1} {val2} {val3}
      </h1>
      <h2 style={{ color: isEqual ? "green" : "red" }}>
        {isEqual ? "You win!" : "You lose!"}
      </h2>
      {isEqual && <h3>Congrats!!!</h3>}
    </div>
  );
}
