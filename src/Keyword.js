import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Keyword(props) {
  if (props.data !== null) {
    return (
      <>
        <section>
          <h1 className="text-capitalize">{props.data.word}</h1>
          <Phonetics data={props.data} />
        </section>
        <Meaning
          data={props.data}
          similarMouseOver={props.similarMouseOver}
          similarMouseOut={props.similarMouseOut}
          search={props.search}
        />
      </>
    );
  } else {
    return null;
  }
}
