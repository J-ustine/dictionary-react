import React from "react";
import Meaning from "./Meaning";

export default function Keyword(props) {
  if (props.data !== null) {
    return (
      <div className="container">
        <h1 className="text-capitalize">{props.data.word}</h1>
        <Meaning data={props.data} />
        <br />
      </div>
    );
  } else {
    return null;
  }
}
