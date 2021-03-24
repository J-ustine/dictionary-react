import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function handlekeyword(event) {
    setKeyword(event.target.value);
  }
  function displayDefinition(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(displayDefinition);
  }
  return (
    <form onSubmit={search}>
      <input
        type="search"
        placeholder="Enter a word"
        onChange={handlekeyword}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
