import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { context } from "../../API/DataCenter";
import ReadLess from "../../helpers/ReadLess";
import Layout from "../Layout";
import SingleArt from "./SingleArt";

const Artist = (props) => {
  const { artists } = useContext(context);
  let idFromUrl = useParams().id;

  const artist = artists.find((el) => el.id === +idFromUrl);
  const artwork = artist.artworks;
  const exhibitions = artist.exhibitions;
  // const artwork = exhibitions[0].artworks;
  const [moreTextEng, setMoreTextEng] = useState(false);
  const [moreTextFr, setMoreTextFr] = useState(false);
  const biographySection = useRef(null);
  return (
    <div>
      <Layout>
        <div className="hero">
          <h1 className="headingPrimaryArtist">{artist.name}</h1>
          <FontAwesomeIcon
            onClick={() => biographySection.current.scrollIntoView()}
            className="heroIcon"
            icon={faChevronDown}
          />
        </div>

        <section ref={biographySection} className="biography">
          <h2>Biography</h2>
          <div className="biosection">
            <div>
              <div className="bio frbio">
                <p
                  className={moreTextFr ? "overflowVisible" : "overflowHidden"}
                >
                  <span>Fr/</span>
                  <br />
                  {artist.biography.fr}
                </p>
                {moreTextFr ? (
                  <ReadLess
                    paragraphStateSetter={setMoreTextFr}
                    content="-Lire Moins"
                    section={biographySection}
                  />
                ) : (
                  <button
                    className="readMore"
                    onClick={() => setMoreTextFr(true)}
                  >
                    +Lire Plus
                  </button>
                )}
              </div>
              {artist.biography.eng !== "" ? (
                <div className="bio engbio">
                  <p
                    className={
                      moreTextEng ? "overflowVisible" : "overflowHidden"
                    }
                  >
                    <span>Eng/</span>
                    <br />
                    {artist.biography.eng}
                  </p>
                  {moreTextEng ? (
                    <ReadLess
                      paragraphStateSetter={setMoreTextEng}
                      content="-Read Less"
                      section={biographySection}
                    />
                  ) : (
                    <button
                      className="readMore"
                      onClick={() => setMoreTextEng(true)}
                    >
                      +Read More
                    </button>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className="box"
              style={{
                backgroundImage: `url(${
                  window.location.origin + "/artistImages/" + artist.image
                })`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </section>
        {exhibitions.length !== 0 ? (
          <section className="AllExhibitions">
            <h2>Exhibitions</h2>
            <div className="exhibitions">
              {exhibitions.map((el) => {
                return (
                  <div key={el.id} className="exhibitions__item">
                    <h3>-{el.year}-</h3>
                    {el.location.map((el, i) => {
                      return <h4 key={i}>{el}</h4>;
                    })}
                  </div>
                );
              })}
            </div>
            {artist.cv !== "" ? (
              <a
                className="viewCv"
                href={window.location.origin + "/" + artist.cv}
                target="_blank"
                rel="noreferrer"
              >
                View Full CV
              </a>
            ) : (
              ""
            )}
          </section>
        ) : (
          ""
        )}
        {artwork.length !== 0 ? (
          <section className="artistWork">
            <h2 className="">Artwork</h2>
            <div className="photoGallery">
              {artwork.map((el, i) => {
                return <SingleArt key={i} el={el} i={i} />;
              })}
            </div>
          </section>
        ) : (
          ""
        )}
      </Layout>
    </div>
  );
};

export default Artist;
