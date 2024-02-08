import React, { useEffect, useState } from "react";
import "../../sass/_main.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import NewsLetterForm from "../forms/NewsLetterForm";
import FormConfirmationMessage from "../forms/FormConfirmationMessage";
const NftLayout = (props) => {
  /// state that tracks scroll position
  const [scrollPos, setScrollPos] = useState(null);
  useEffect(() => {
    /// setting the scoll position to the scrollPos State
    window.addEventListener("scroll", () => {
      setScrollPos(window.pageYOffset);
    });
  }, [scrollPos]);
  // menu icon changes based on the state
  const [menu, setMenu] = useState(false);
  // modal appears or disappears based on the state
  const [formModal, setformModal] = useState(false);
  /// condition based on the media query
  const isMobile = useMediaQuery({
    query: "(max-width: 75em)",
  });
  // scroll up the page from any component
  const scrollUpThePage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // wether the information entered is correct or not
  let [confirmation, setConfirmation] = useState("");
  return (
    <>
      {/* form modal outside elements so it doesnt get blurred */}
      {formModal ? (
        <NewsLetterForm
          setMenu={setMenu}
          setConfirmation={setConfirmation}
          setformModal={setformModal}
        />
      ) : (
        ""
      )}
      <FormConfirmationMessage confirmation={confirmation} />
      <div className={formModal || confirmation ? "wrapper" : ""}>
        <header className="headerNft">
          <nav className="navBarNft">
            <div className="logo">
              <Link to="/">
                <img
                  src={window.location.origin + "/logoCDA.png"}
                  alt="CDA Gallery logo"
                />
              </Link>
            </div>
            <ul className="navListNft">
              <li className="navListNft__item">
                <Link to={"/artists"}>artists</Link>
              </li>
              <li className="navListNft__item">
                <Link to={"/exhibitions"}>exhibitions</Link>
              </li>
              <li className="navListNft__item">
                <Link to={"/events"}>events</Link>
              </li>
              <li className="navListNft__item">
                <Link to={"/nfts"}>NFT</Link>
              </li>
              <li className="navListNft__item">
                <Link to={"/gallery"}>the gallery</Link>
              </li>
              <li className="navListNft__item">
                <a
                  rel="noreferrer"
                  href="https://cdagallery.ma/cdastore/"
                  target="_blank"
                >
                  store
                </a>
              </li>
              <li className="navListNft__item">
                <Link to={"/contact"}>contact</Link>
              </li>
            </ul>
            <button
              onClick={() => setformModal(!formModal)}
              className="subscribeBtn"
            >
              Newsletter
            </button>
            <div className="mobileNavIcons">
              <FontAwesomeIcon
                onClick={() => setMenu(!menu)}
                className={menu ? "d-none" : ""}
                icon={faBars}
              />
              <FontAwesomeIcon
                onClick={() => setMenu(!menu)}
                className={menu ? "" : "d-none"}
                icon={faTimes}
              />
            </div>
          </nav>
        </header>
        <div className={menu ? "mobileNavListNft" : "d-none mobileNavListNft"}>
          <ul className="mobileNavListNft__list">
            <li className="navListNft__item">
              <Link to={"/artists"}>artists</Link>
            </li>
            <li className="navListNft__item">
              <Link to={"/exhibitions"}>exhibitions</Link>
            </li>
            <li className="navListNft__item">
              <Link to={"/events"}>events</Link>
            </li>
            <li className="navListNft__item">
              <Link to={"/nfts"}>NFT</Link>
            </li>
            <li className="navListNft__item">
              <Link to={"/gallery"}>the gallery</Link>
            </li>
            <li className="navListNft__item">
              <a
                rel="noreferrer"
                href="https://cdagallery.ma/cdastore/"
                target="_blank"
              >
                store
              </a>
            </li>
            <li className="navListNft__item">
              <Link to={"/contact"}>contact</Link>
            </li>
          </ul>
          <ul className="additionalNavOptions">
            <hr />
            <li
              className="optionsItem"
              onClick={() => setformModal(!formModal)}
            >
              Newsletter
            </li>
            <li className="optionsItem">Legal</li>
          </ul>
          <hr />
          <div className="icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/culturedesignart/?_rdc=2&_rdr"
            >
              <FaFacebook className="socialIcon icon1" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/cda_gallery/?hl=en"
            >
              <FaInstagram className="socialIcon" />
            </a>
          </div>
        </div>
        <main className={menu && isMobile ? "d-none" : ""}>
          {props.children}
        </main>
        {/* footer doesnt show up when user clicks on menu icon from mobile */}
        {menu === false ? (
          <footer className="footerNft">
            <p className="paragraph">
              CDA is a Contemporary art gallery based in Casablanca. CDA stands
              for Culture, Design and Art. Our pluridisciplinar combines an
              exhibition space and a bookstore. Throughout the year, many
              cultural events are organized inside the space all along with
              regular exhibitions and art encounters.
            </p>

            <div className="footer_info">
              <div className="credentials">2021 - CDA Gallery/Legal</div>
              <button
                onClick={() => setformModal(!formModal)}
                className="subscribe"
              >
                subscribe to newsletter
              </button>
              <div className="socials">
                <span>Follow us</span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://web.facebook.com/culturedesignart/?_rdc=1&_rdr"
                >
                  <FaFacebook className="socialIcon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/cda_gallery/?hl=en"
                >
                  <FaInstagram className="socialIcon" />
                </a>
              </div>
            </div>
          </footer>
        ) : (
          ""
        )}
        {/* scroll up the pages button */}
        <FontAwesomeIcon
          onClick={() => scrollUpThePage()}
          className={
            scrollPos > 300 ? "scrollUpThePageNft " : " scrollUpThePage d-none"
          }
          icon={faChevronUp}
        />
      </div>
    </>
  );
};

export default NftLayout;
