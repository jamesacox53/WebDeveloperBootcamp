import ColorBox from "./ColorBox";

const colorArr = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "orange",
  "teal",
];

export default function ColorBoxGrid() {
  const colorBoxArr = [];

  for (let i = 1; i <= 25; i++) {
    const colorBox = <ColorBox key={i} colorArr={colorArr} />;
    colorBoxArr.push(colorBox);
  }

  styleObj = {
    width: "400px",
    height: "400px",
    border: "1px solid black",
    display: "flex",
    flexWrap: "wrap",
  };

  return <div style={styleObj}>{colorBoxArr}</div>;
}
