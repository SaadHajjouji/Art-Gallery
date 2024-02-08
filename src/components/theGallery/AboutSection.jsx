import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const AboutSection = () => {
  return (
    <div>
      <section className="aboutSection">
        <LazyLoadImage
          effect="blur"
          src={window.location.origin + "/cdaBigLogo.jpg"}
          alt="CDAGallery logo"
        />
        <div className="aboutText">
          <p>
            CDA GALLERY fédère, autour d'une série d'événements et d'expositions
            de peintures et de photographies, les artistes émergents de la
            nouvelle scène de la région Mena et au-delà en laissant le passé
            s'insurger au présent se plaçant ainsi aux portes de la pensée
            contemporaine.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
