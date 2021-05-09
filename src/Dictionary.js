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
    event.preventDefault();
    const languague = event.target.childNodes[0].data;
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

  function similar(event) {
    setKeyword(event.target.value);
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
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Languague
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="www.google.com"
                  onClick={defineLanguague}
                >
                  English
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="www.google.com"
                  onClick={defineLanguague}
                >
                  Français
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="www.google.com"
                  onClick={defineLanguague}
                >
                  Español
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </ul>
            <input
              type="text"
              className="form-control"
              placeholder={placeholder}
              onChange={handlekeyword}
              aria-label="Text input with dropdown button"
            />
          </div>
        </form>
      </section>
      <Keyword data={definition} similar={similar} search={search} />
      <Photos photos={photos} keyword={keyword} />
      Coded by{" "}
      <a href="https://github.com/J-ustine" target="_blank" rel="noreferrer">
        Justine Collache
      </a>
    </span>
  );
}
