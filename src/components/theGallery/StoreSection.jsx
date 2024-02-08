import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const StoreSection = () => {
  return (
    <section className="storeSection">
      <LazyLoadImage
        effect="blur"
        src={window.location.origin + "/store2.jpg"}
        alt="CDAGallery logo"
      />
      <div className="aboutText">
        <h2>OUR PHYSICAL STORE</h2>
        <p>
          In CDA Store you can find a large variety of Books ( Beaux livres, old
          books ... ) along with limited edition goodies such as vintage posters
          or beautiful candles.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cdagallery.ma/boutique/"
        >
          <button>Visit</button>
        </a>
      </div>
    </section>
  );
};

export default StoreSection;
