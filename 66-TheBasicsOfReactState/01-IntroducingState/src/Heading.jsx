export default function Heading({ color = "olive", fontSize, text }) {
  return <h1 style={{ color: color, fontSize: fontSize }}>{text}</h1>;
}
