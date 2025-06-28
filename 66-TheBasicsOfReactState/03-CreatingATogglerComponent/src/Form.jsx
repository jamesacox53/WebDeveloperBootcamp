function handleFormSubmit(event) {
  event.preventDefault();

  console.log("Submitted the form!");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}
