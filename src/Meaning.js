import React from "react";

export default function Meaning(props) {
  return props.data.meanings.map(function (meaning, index) {
    return (
      <div key={index}>
        <h4>{meaning.partOfSpeech}</h4>
        {meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <p>{definitions.definition}</p>
              <em>{definitions.example}</em>
            </div>
          );
        })}
      </div>
    );
  });
}
