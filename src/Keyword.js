import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Keyword({ data }) {
  if (data !== null) {
    return (
      <>
        <section>
          <h1 className="text-capitalize">{data.word}</h1>
          <Phonetics data={data} />
        </section>
        <Meaning data={data} />
      </>
    );
  } else {
    return null;
  }
}
