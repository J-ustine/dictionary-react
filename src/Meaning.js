import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return props.data.meanings.map(function (meaning, index) {
    return (
      <div key={index}>
        <h4>{meaning.partOfSpeech}</h4>
        {meaning.definitions.map(function (definitions, index) {
          console.log(definitions.synonyms);
          return (
            <div key={index}>
              <p>{definitions.definition}</p>
              <em>Example: "{definitions.example}"</em>
              <br />
              <br />
              <Synonyms synonyms={definitions.synonyms} />
            </div>
          );
        })}
      </div>
    );
  });
}
