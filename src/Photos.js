import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <a
                key={index}
                href={photos.src.original}
                target="_blank"
                rel="noreferrer"
                className="col-lg-4 col-sm-12 col-md-6"
              >
                <img
                  alt={props.keyword}
                  src={photos.src.tiny}
                  className="img-keyword"
                />
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
