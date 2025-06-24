export default function ListPicker({ valuesArr }) {
  const randIndexInt = Math.floor(Math.random() * valuesArr.length);
  const randElem = valuesArr[randIndexInt];
  return (
    <div>
      <p>The list of values: {valuesArr.join(", ")}</p>
      <p>Random element is: {randElem}</p>
    </div>
  );
}
