import React, { useState } from "react";
import axios from "axios";
import Keyword from "./Keyword";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [definition, setDefinition] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [languague, setLanguague] = useState("en_US");
  const [placeholder, setPlaceholder] = useState("Enter a word");

  function handlekeyword(event) {
    setKeyword(event.target.value);
  }
  function displayDefinition(response) {
    setDefinition(response.data[0]);
  }
  function handlePexels(response) {
    setPhotos(response.data.photos);
  }

  function defineLanguague(event) {
    const languague = event.target.nextSibling.nextSibling.data;
    if (languague === "English") {
      setLanguague("en_US");
      setPlaceholder("Enter a word");
    } else {
      if (languague === "Français") {
        setLanguague("fr");
        setPlaceholder("Cherchez un mot");
      } else {
        setLanguague("es");
        setPlaceholder("Introduce una palabra");
      }
    }
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${languague}/${keyword}`;
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
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-light active form-label">
              <input
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                checked
                readOnly
                onClick={defineLanguague}
              />{" "}
              English
            </label>
            <label className="btn btn-light form-label">
              <input
                type="radio"
                name="options"
                id="option2"
                autoComplete="off"
                onClick={defineLanguague}
              />{" "}
              Français
            </label>
            <label className="btn btn-light form-label">
              <input
                type="radio"
                name="options"
                id="option3"
                autoComplete="off"
                onClick={defineLanguague}
              />{" "}
              Español
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={placeholder}
              aria-label="Example text with two button addons"
              onChange={handlekeyword}
            />
          </div>
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
