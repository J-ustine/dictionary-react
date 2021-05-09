import React from "react";

export default function Synonyms(props) {
  // function searchSimilar(event) {
  //   console.log(event.target.name);
  // }

  if (props.synonyms) {
    return (
      <div className="synonyms">
        Similar :{" "}
        {props.synonyms.map(function (synomyns, index) {
          return (
            <button
              key={index}
              name={synomyns}
              value={synomyns}
              className="similar"
              onClick={props.search}
              onMouseEnter={props.similar}
            >
              {synomyns}{" "}
            </button>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
