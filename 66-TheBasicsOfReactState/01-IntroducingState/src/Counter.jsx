export default function Counter() {
  let num = 0;
  const incrementNum = () => (num += 1);

  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={incrementNum}>Increment</button>
    </div>
  );
}
