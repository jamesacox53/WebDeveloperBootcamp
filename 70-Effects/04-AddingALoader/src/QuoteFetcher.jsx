import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quoteObj, setQuoteObj] = useState(getInitQuoteObj);

  const fetchQuote = () => _fetchQuote(setQuoteObj);

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <button onClick={fetchQuote}>Get Quote Using handler</button>
      <h1>{quoteObj["text"]}</h1>
      <h3>{quoteObj["author"]}</h3>
    </div>
  );
}

function getInitQuoteObj() {
  return {
    text: "",
    author: "",
  };
}

async function _fetchQuote(setQuoteObj) {
  const response = await fetch(RANDOM_QUOTE_URL);
  const jsonResponse = await response.json();

  const randomQuoteObj = jsonResponse.quote;
  setQuoteObj(randomQuoteObj);
}
