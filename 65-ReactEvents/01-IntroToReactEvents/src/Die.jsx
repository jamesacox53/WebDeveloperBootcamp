export default function Die({ numSides = 6 }) {
  const rollInt = Math.floor(Math.random() * numSides) + 1;

  return (
    <p>
      {numSides}-sided die roll: {rollInt}
    </p>
  );
}
