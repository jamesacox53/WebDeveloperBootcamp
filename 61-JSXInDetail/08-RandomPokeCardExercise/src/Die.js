import "./Die.css";

export default function Die() {
  const rollInt = Math.floor(Math.random() * 6) + 1;

  return <h2 className="Die">Die Roll: {rollInt}</h2>;
}
