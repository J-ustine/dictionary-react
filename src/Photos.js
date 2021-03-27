import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <a
                href={photos.src.original}
                target="_blank"
                rel="noreferrer"
                className="col-lg-4 col-md-sm-12"
              >
                <img key={index} alt={props.keyword} src={photos.src.tiny} />
              </a>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
