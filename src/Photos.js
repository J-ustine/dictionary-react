import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <img
                key={index}
                className="col-4"
                alt={props.keyword}
                src={photos.src.tiny}
              />
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
