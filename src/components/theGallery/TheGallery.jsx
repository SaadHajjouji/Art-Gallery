import React, { useState } from "react";
import Layout from "../Layout";
import "../../sass/theGallery.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import OwnerSection from "./OwnerSection";
import AboutSection from "./AboutSection";
import StoreSection from "./StoreSection";
const TheGallery = () => {
  /// references to sections

  const [clickedSection, setClickedSection] = useState("about");
  /// displays the section clicked
  function correctSection() {
    switch (clickedSection) {
      // case "owner":
      //   return <OwnerSection />;
      case "about":
        return <AboutSection />;
      case "store":
        return <StoreSection />;
      default:
        <OwnerSection />;
        break;
    }
  }
  return (
    <div>
      <Layout>
        <ul className="browser">
          {/* <li className="browser__item">
            <button onClick={() => setClickedSection("owner")}>Owner </button>
          </li> */}
          <li className="browser__item">
            <button onClick={() => setClickedSection("about")}>About </button>
          </li>
          <li className="browser__item">
            <button onClick={() => setClickedSection("store")}>Store </button>
          </li>
        </ul>
        {correctSection()}
      </Layout>
    </div>
  );
};

export default TheGallery;
