import React, { useState } from "react";
import axios from "axios";
import Keyword from "./Keyword";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handlekeyword(event) {
    setKeyword(event.target.value);
  }
  function displayDefinition(response) {
    setDefinition(response.data[0]);
  }
  function handlePexels(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(displayDefinition);
    let pexelsApiKey = `563492ad6f9170000100000153f9ad96f72949cdae594ad31807e083`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexels);
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
      <Photos photos={photos} keyword={keyword} />
      Coded by{" "}
      <a href="https://github.com/J-ustine" target="_blank" rel="noreferrer">
        Justine Collache
      </a>
    </span>
  );
}
