import React from "react";
import "../../sass/_main.scss";
import Layout from "../Layout";
import Slider from "./Slider";
import ExhibitionSection from "../Exhibitions/ExhibitionSection";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Home() {
  return (
    <div>
      <Layout>
        <Slider />
        <div className="seperator"></div>

        {/* <div className="vidThegamblers">
          <div className="vidbtn">
            <video
              width="100%"
              height="auto"
              style={{}}
              controls="true"
              playsinline
              autoPlay
            >
              <source
                src={window.location.origin + "/thegamblers.mp4"}
                type="video/mp4"
              />
            </video>
            <a
              href={window.location.origin + "/#/exhibition/48"}
              className="btnHome"
            >
              Learn more
            </a>
          </div>
        </div> */}
        <section className="exhibitionSection">
          <h1 className="headingPrimary ">Currently</h1>
          <div className="currently">
            <p>
              CDA Gallery est heureuse de présenter l'exposition Gâta Bantu de
              l'artiste Yvanovitch Mbaya{" "}
              <strong>du 28 septembre au 10 novembre 2022</strong>. Afropolitain
              et Marocain de cœur, Yvanovitch a pris le temps de ses multiples
              voyages transafricains pour mûrir une œuvre minimaliste qu’il
              développe d’abord lors de ses enseignements aux Beaux-arts de
              Brazzaville avant de s’émanciper de tout académisme par une
              créolisation maîtrisée et référencée au service de formes et
              d’objets d’étude et de représentation hautement personnels. Pour
              la première fois au Maroc, cet ensemble d’œuvres significatives
              des voyages et des expériences de l’artiste à travers
              l’esthétique, la matière et divers récits fictionnels de son
              expérience panafricaine sera présenté par CDA Gallery au sein de
              son espace.{" "}
            </p>

            <img
              src={
                window.location.origin +
                "/events/eventGallery/AfficheGataBantu.jpeg"
              }
              alt="gata"
            />
          </div>
        </section>

        <ExhibitionSection />
      </Layout>
    </div>
  );
}

export default Home;
