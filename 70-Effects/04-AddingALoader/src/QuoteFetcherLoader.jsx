import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quoteObj, setQuoteObj] = useState(getInitQuoteObj);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = () => _fetchQuote(setQuoteObj, setIsLoading);

  useEffect(() => {
    fetchQuote();
  }, []);

  const quoteLoaderElem = getQuoteLoaderElem(quoteObj, fetchQuote);
  return <div>{isLoading ? <p>Loading...</p> : quoteLoaderElem}</div>;
}

function getInitQuoteObj() {
  return {
    text: "",
    author: "",
  };
}

async function _fetchQuote(setQuoteObj, setIsLoading) {
  const response = await fetch(RANDOM_QUOTE_URL);
  const jsonResponse = await response.json();

  const randomQuoteObj = jsonResponse.quote;
  setQuoteObj(randomQuoteObj);
  setIsLoading(false);
}

function getQuoteLoaderElem(quoteObj, fetchQuote) {
  return (
    <>
      <button onClick={fetchQuote}>Get Quote Using handler</button>
      <h1>{quoteObj["text"]}</h1>
      <h3>{quoteObj["author"]}</h3>
    </>
  );
}
