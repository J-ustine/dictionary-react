import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="synonyms">
        Similar :
        {props.synonyms.map(function (synomyns, index) {
          return (
            <span key={index}>
              {" "}
              {synomyns}
              {", "}
            </span>
          );
        })}
        {"."}
      </div>
    );
  } else {
    return null;
  }
}
