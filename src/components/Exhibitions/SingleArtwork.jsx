import React, { useState } from "react";
import ExpandedArtwork from "./ExpandedArtwork";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
const SingleArtwork = ({ el }) => {
  /// artwork as a popUp
  const [popupArtwork, setPopupArtwork] = useState(false);
  return (
    <div key={el.i} className=" artwork ">
      <div className="galimages">
        <LazyLoadImage
          onClick={() => setPopupArtwork(true)}
          alt={`${el.title}, ${el.artists}`}
          effect="blur"
          src={window.location.origin + "/artworks/" + el.artwork}
        />
      </div>
      <div className="info">
        <h2 className="artistName">{el.artists}</h2>
        <h3 className="pieceTitle">{el.title}</h3>
        <span className="dimensions">{el.dimensions}</span>
        <span className="medium">{el.medium}</span>
        <Link to={"/devis/" + el.id} className="devis">
          Devis
        </Link>
      </div>

      {popupArtwork ? (
        <ExpandedArtwork setPopupArtwork={setPopupArtwork} el={el} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleArtwork;
