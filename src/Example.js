import React from "react";

export default function Example(props) {
  if (props.definition) {
    return (
      <div>
        <em>Example: "{props.definition}"</em>
        <br />
      </div>
    );
  } else {
    return null;
  }
}
