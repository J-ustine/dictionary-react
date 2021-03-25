import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Keyword(props) {
  console.log(props.data);
  if (props.data !== null) {
    return (
      <div className="container">
        <h1 className="text-capitalize">{props.data.word}</h1>
        <Phonetics data={props.data} />
        <Meaning data={props.data} />
        <br />
      </div>
    );
  } else {
    return null;
  }
}
