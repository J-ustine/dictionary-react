import React, { useState } from "react";
import axios from "axios";
import Keyword from "./Keyword";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
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
    const languague = event.target.value;
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
    setKeyword("");
  }

  function similarMouseOver(event) {
    setKeyword(event.target.value);
  }

  function similarMouseOut() {
    setKeyword("");
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
          <div className="input-group row">
            <div
              className="btn-group col-4"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-light"
                value="English"
                onClick={defineLanguague}
              >
                English
              </button>
              <button
                type="button"
                className="btn btn-light"
                value="Español"
                onClick={defineLanguague}
              >
                Español
              </button>
              <button
                type="button"
                className="btn btn-light"
                value="Français"
                onClick={defineLanguague}
              >
                Français
              </button>
            </div>
            <input
              type="text"
              className="form-control col-8"
              placeholder={placeholder}
              value={keyword}
              onChange={handlekeyword}
              aria-label="Text input with dropdown button"
            />
          </div>
        </form>
      </section>
      <Keyword
        data={definition}
        languague={languague}
        similarMouseOver={similarMouseOver}
        similarMouseOut={similarMouseOut}
        search={search}
      />
      <Photos photos={photos} keyword={keyword} />
      Coded by{" "}
      <a href="https://github.com/J-ustine" target="_blank" rel="noreferrer">
        Justine Collache
      </a>
    </span>
  );
}
