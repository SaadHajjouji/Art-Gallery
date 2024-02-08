import React, { useContext } from "react";
import { context } from "../../API/DataCenter";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PopArtwork = ({ id, setImgAppear }) => {
  const { exhibitions } = useContext(context);
  const artworks = exhibitions.map((el) => el.artworks).flat();
  const clickedArtwork = artworks.find((el) => el.id === id);

  return (
    <section className="popupImgAdminPage">
      <FontAwesomeIcon
        className="close"
        onClick={() => setImgAppear(false)}
        icon={faTimes}
      />
      <img
        src={window.location.origin + "/artworks/" + clickedArtwork.artwork}
        alt={clickedArtwork.title}
      />
    </section>
  );
};

export default PopArtwork;
