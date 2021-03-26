import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return props.data.meanings.map(function (meaning, index) {
    return (
      <div key={index}>
        <section>
          <h4>{meaning.partOfSpeech}</h4>
          {meaning.definitions.map(function (definitions, index) {
            return (
              <div key={index}>
                <div>{definitions.definition}</div>
                <Example definition={definitions.example} />
                <br />
                <Synonyms synonyms={definitions.synonyms} />
              </div>
            );
          })}
        </section>
      </div>
    );
  });
}
