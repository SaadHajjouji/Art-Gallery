import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React from "react";

const ExpandedArtwork = ({ el, setPopupArtwork }) => {
  return (
    <div className="popupArtwork">
      <FontAwesomeIcon
        className="close"
        onClick={() => setPopupArtwork(false)}
        icon={faTimes}
      />
      <div className="content">
        <LazyLoadImage
          alt={`${el.title}, ${el.artists}`}
          effect="blur"
          src={window.location.origin + "/artworks/" + el.artwork}
        />
        <div className="popupInfo">
          <h2 className="artistName">{el.artists}</h2>
          <h3 className="pieceTitle">{el.title}</h3>
          <span className="dimensions">{el.dimensions}</span>
          <span className="medium">{el.medium}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpandedArtwork;
