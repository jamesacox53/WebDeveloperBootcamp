export default function DoubleDice() {
  const num1Int = Math.floor(Math.random() * 3) + 1;
  const num2Int = Math.floor(Math.random() * 3) + 1;

  const hasWon = num1Int == num2Int;

  const styles = {
    color: hasWon ? "green" : "red",
    fontSize: "30px",
  };

  return (
    <div className="DoubleDice" style={styles}>
      <h2>Double Dice</h2>
      {hasWon && <h3>You Win!</h3>}
      <p>Num 1: {num1Int}</p>
      <p>Num 2: {num2Int}</p>
    </div>
  );
}
