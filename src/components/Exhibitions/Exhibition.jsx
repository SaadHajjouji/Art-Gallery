import React, { useState, useContext, useRef } from "react";
import Layout from "../Layout";
import "../../sass/_main.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { context } from "../../API/DataCenter";
import { Link } from "react-router-dom";
import ReadLess from "../../helpers/ReadLess";
import SingleArtwork from "./SingleArtwork";
import FeaturedArtwork from "./FeaturedArtwork";
import { useParams } from "react-router-dom";

const Exhibition = (props) => {
  // reference of the two paragraphs
  const paragraph = useRef(null);
  /// artwork section reference
  const artworkSection = useRef(null);
  //artist info secion reference
  const artistInfoSection = useRef(null);
  /// more text or less text depend on these 2 states
  const [moreText, setMoreText] = useState(false);

  // artists data
  const { artists } = useContext(context);
  const { exhibitions } = useContext(context);
  // function thtat scroll into any given view
  const scrollIntoView = (section) => {
    section.current.scrollIntoView();
  };

  // id from url
  // let idFromUrl = props.match.params.id;
  let idFromUrl = useParams().id;

  //specific show from id in url
  const show = exhibitions.find((el) => el.id === +idFromUrl);
  /// all artists
  const allArtists = show.allArtists;
  const exhibitionArtist = [];
  // getting all artists data depending on exhibition array
  for (let i = 0; i < artists.length; i++) {
    for (let j = 0; j < allArtists.length; j++) {
      if (artists[i].id === allArtists[j].artistId) {
        exhibitionArtist.push(artists[i]);
      }
    }
  }
  
  /// paragraph language changer state
  const [language, setLanguage] = useState("fr");
  return (
    <div>
      <Layout>
        <section className="exhibitionInfo">
          <div className="namePiece">
            <span className="exhb">Exhibition</span>
            <h2 className="artist">{show.artists}</h2>
            <h3 className="piece">{show.titleEng}</h3>
            <h3 className="piece">{show.titleFR}</h3>
            <span className="showNature">{show.showNature}</span>
            <div className="datetime">
              <span>{show.duration}</span>
            </div>
            <div className="exhibitionbtns">
              <button
                onClick={() => scrollIntoView(artworkSection)}
                className="listArtworks__btn"
              >
                List of artwork
              </button>
              <button
                onClick={() => scrollIntoView(artistInfoSection)}
                className="artistInfo__btn"
              >
                Artist info
              </button>
            </div>
          </div>
        </section>
        <section className="galleryShow">
          {show.showImages.map((el) => {
            return (
              <div key={el.i} className="artworkBox">
                {/* lazy loading component instead of an normal img tag to improve performance */}
                <LazyLoadImage
                  alt={el.title}
                  effect="blur"
                  src={window.location.origin + "/galleryImages/" + el.image}
                />
                <span>{el.title}</span>
              </div>
            );
          })}
        </section>
        {show.quote !== "" ? (
          <section className="quote">
            <span>{show.quote}</span>
          </section>
        ) : (
          ""
        )}

        {/* VIDEO */}
        {/* {show.video !== "" ? (
          <section className="video">
            <video
              width="100%"
              height="auto"
              style={{}}
              controls="true"
              playsinline
              preload="none"
            >
              <source
                src={window.location.origin + show.video}
                type="video/mp4"
              />
            </video>
          </section>
        ) : (
          ""
        )} */}
        <section className="Featured">
          {show.featuredArt.map((el) => {
            return <FeaturedArtwork el={el} />;
          })}
        </section>

        {/* { paragraph} */}

        {show.paragraphFr !== `` || show.paragraphEng !== `` ? (
          <section ref={paragraph} className="art_pararaph">
            <div className="textIntro">
              {show.paragraphEng !== "" ? (
                <div className="languages">
                  <span
                    onClick={() => setLanguage("fr")}
                    className="textLanguage"
                  >
                    FR
                  </span>
                  <span
                    onClick={() => setLanguage("eng")}
                    className="textLanguage"
                  >
                    ENG
                  </span>
                </div>
              ) : (
                ""
              )}

              {show.descriptionTitleEng !== "" ||
              show.descriptionAuthorFr !== "" ? (
                <span className="intro">
                  {language === "fr"
                    ? show.descriptionTitleFr
                    : show.descriptionTitleEng}
                </span>
              ) : (
                ""
              )}
              {show.descriptionAuthorFr !== "" ||
              show.descriptionTitleEng !== "" ? (
                <span className="author">
                  —
                  {language === "fr"
                    ? show.descriptionAuthorFr
                    : show.descriptionAuthorEng}
                </span>
              ) : (
                ""
              )}
            </div>
            <p className={moreText ? " overflowVisible" : "overflowHidden"}>
              {language === "fr" ? show.paragraphFr : show.paragraphEng}
            </p>
            {moreText ? (
              <ReadLess
                section={paragraph}
                paragraphStateSetter={setMoreText}
                content={language === "fr" ? "-Lire Moins" : "-Read Less"}
              />
            ) : (
              <button
                onClick={() => setMoreText(!moreText)}
                className="readMore"
              >
                {language === "fr" ? "+Lire Plus" : "+Read More"}
              </button>
            )}
          </section>
        ) : (
          ""
        )}

        {exhibitionArtist.length > 1 ? (
          <section ref={artistInfoSection} className="aboutArtists">
            <h2 className="artistNamesSection">The Artists</h2>
            <div className="artistLayout">
              {exhibitionArtist.map((el) => {
                return (
                  <div className="theArtist">
                    <div
                      className="box"
                      style={{
                        backgroundImage: `url(${
                          window.location.origin + "/artistImages/" + el.image
                        })`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        webkitfilter: "grayscale(100%)",
                        filter: "grayscale(100%)",
                      }}
                    ></div>
                    <Link to={"/artist/" + el.id} className="linkToArtist">
                      More About {el.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        ) : (
          <section ref={artistInfoSection} className="aboutArtist">
            <h2 className="aboutSectionTitle">The Artist</h2>
            <div className="artistBox">
              <LazyLoadImage
                className="artistBoxImg"
                alt={show.artists}
                effect="blur"
                src={
                  window.location.origin + "/artistImages/" + show.artistImage
                }
              />
              <div className="artistInfo">
                <h3 className="artistName">{exhibitionArtist[0].name}</h3>
                <div className="otherInfo">
                  <article className="frContent">
                    <span className="lng">Fr/</span>
                    <p className="bio bioFr">
                      {exhibitionArtist[0].biography.fr}
                    </p>
                  </article>
                  {exhibitionArtist[0].biography.eng !== "" ? (
                    <article className="engContent">
                      <span className="lng">Eng/</span>
                      <p className="bio bioEng">
                        {exhibitionArtist[0].biography.eng}
                      </p>
                    </article>
                  ) : (
                    ""
                  )}
                </div>
                <Link
                  to={"/artist/" + allArtists[0].artistId}
                  className="linkToArtist"
                >
                  More About {show.artists}
                </Link>
              </div>
            </div>
          </section>
        )}
        <section ref={artworkSection} className="thegal">
          <h2 className="galSectionTitle">Artwork</h2>
          <div className="artworkSection">
            {show.artworks.map((el) => {
              return <SingleArtwork el={el} />;
            })}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Exhibition;
