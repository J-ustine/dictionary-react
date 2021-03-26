import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return props.data.phonetics.map(function (phonetics, index) {
    return (
      <div key={index}>
        <p>{phonetics.text}</p>
        <ReactAudioPlayer src={phonetics.audio} controls />
      </div>
    );
  });
}
