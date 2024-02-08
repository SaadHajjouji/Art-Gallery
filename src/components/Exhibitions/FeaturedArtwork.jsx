import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ExpandedArtwork from "./ExpandedArtwork";
const FeaturedArtwork = ({ el }) => {
  const [popupArtwork, setPopupArtwork] = useState(false);
  return (
    <>
      <div className="featuredBox">
        <LazyLoadImage
          className="artistBoxImg"
          alt={el.title}
          effect="blur"
          src={window.location.origin + "/artworks/" + el.artwork}
          onClick={() => setPopupArtwork(true)}
        />
        <h2 className="artistName">{el.artists}</h2>
        <h3 className="pieceTitle">{el.title}</h3>
        <span className="dimensions">{el.dimensions}</span>
        <span className="medium">{el.medium}</span>
      </div>

      {popupArtwork ? (
        <ExpandedArtwork setPopupArtwork={setPopupArtwork} el={el} />
      ) : (
        ""
      )}
    </>
  );
};

export default FeaturedArtwork;
