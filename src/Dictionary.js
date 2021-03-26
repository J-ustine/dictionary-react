import React, { useState } from "react";
import axios from "axios";
import Keyword from "./Keyword";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [definition, setDefinition] = useState(null);
  function handlekeyword(event) {
    setKeyword(event.target.value);
  }
  function displayDefinition(response) {
    setDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(displayDefinition);
  }
  return (
    <span className="container">
      <section>
        <form onSubmit={search}>
          <input
            className="form-control"
            type="search"
            placeholder="Enter a word"
            onChange={handlekeyword}
          />
        </form>
      </section>
      <Keyword data={definition} />
    </span>
  );
}
