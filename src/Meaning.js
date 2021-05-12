import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return props.data.meanings.map((meaning, index) => (
    <div key={index}>
      <section>
        <h4>{meaning.partOfSpeech}</h4>
        {meaning.definitions.map((definitions, index) => (
          <div key={index}>
            <div>{definitions.definition}</div>
            <Example definition={definitions.example} />
            <br />
            <Synonyms
              synonyms={definitions.synonyms}
              languague={props.languague}
              similarMouseOver={props.similarMouseOver}
              similarMouseOut={props.similarMouseOut}
              search={props.search}
            />
          </div>
        ))}
      </section>
    </div>
  ));
}
