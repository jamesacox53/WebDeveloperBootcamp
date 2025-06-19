export default function Die() {
  const rollInt = Math.floor(Math.random() * 6) + 1;

  return <h1>Die Roll: {rollInt}</h1>;
}
