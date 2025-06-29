import { useState } from "react";

export default function ColorBox({ colorArr }) {
  const initColorStr = getRandColorStr(colorArr);
  const [colorStr, setColorStr] = useState(initColorStr);

  const styleObj = {
    width: "20%",
    height: "20%",
    backgroundColor: colorStr,
  };

  return (
    <div
      style={styleObj}
      onClick={() => changeBackgroundColor(colorArr, setColorStr)}
    ></div>
  );
}

function getRandColorStr(colorArr) {
  const colorIndex = Math.floor(Math.random() * colorArr.length);

  return colorArr[colorIndex];
}

function changeBackgroundColor(colorArr, setColorStr) {
  const newColorStr = getRandColorStr(colorArr);

  setColorStr(newColorStr);
}
