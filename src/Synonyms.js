import React from "react";

export default function Synonyms(props) {
  const similar = props.synonyms;

  if (props.languague === "en_US") {
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
                onMouseOver={props.similarMouseOver}
                onMouseLeave={props.similarMouseOut}
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

  if (props.languague !== "en_US") {
    if (similar && similar.length) {
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
                onMouseOver={props.similarMouseOver}
                onMouseLeave={props.similarMouseOut}
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
}
