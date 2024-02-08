import React from "react";
import ExpandedArtwork from "../Exhibitions/ExpandedArtwork";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";
const SingleArt = ({ el, i }) => {
  const [popupArtwork, setPopupArtwork] = useState(false);
  return (
    <div>
      <div className="artworkDetails">
        <LazyLoadImage
          onClick={() => setPopupArtwork(true)}
          src={window.location.origin + "/artworks/" + el.artwork}
          alt={`${el.artists}'s artwork'`}
          effect="blur"
        />
        <span className="pieceInfo pieceTitle">{el.title}</span>
        <span className="pieceInfo pieceMedium">{el.medium}</span>
        <span className="pieceInfo pieceDimensions">{el.dimensions}</span>
      </div>

      {popupArtwork ? (
        <ExpandedArtwork setPopupArtwork={setPopupArtwork} el={el} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleArt;
