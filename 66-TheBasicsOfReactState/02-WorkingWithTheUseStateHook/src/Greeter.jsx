export default function Greeter({ person = "Everyone", from = "Anonymous" }) {
  return (
    <>
      <h1>Hi there, {person}</h1>
      <h2>-{from}</h2>
    </>
  );
}
