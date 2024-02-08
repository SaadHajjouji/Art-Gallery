import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { context } from "../../API/DataCenter";
const ExhibitionSection = () => {
  const { exhibitions } = useContext(context);
  const exhibitionsDataList = exhibitions;
  return (
    <div>
      <section className="exhibitionSection">
        <h1 className="headingPrimary">Exhibitions</h1>
        {/* <ul className="browser">
          <li className="browser__item">
            <button>Current </button>
          </li>
          <li className="browser__item">
            <button>Upcoming </button>
          </li>
          <li className="browser__item">
            <button>Past </button>
          </li>
        </ul> */}
        <div className="exhibitions">
          {exhibitionsDataList.map((item, i) => {
            return (
              <Link key={item.id} to={"/exhibition/" + item.id}>
                <article className="exhibitions__item">
                  <div className="image">
                    <img
                      src={
                        window.location.origin +
                        "/galleryImages/" +
                        item.galImage
                      }
                      alt={`${item.titleFR} by ${item.artists}`}
                    />
                  </div>
                  <div className="info">
                    <h2 className="artist">{item.artists}</h2>
                    <span className="title">{item.titleFR}</span>
                    <span className="title">{item.titleEng}</span>
                    <span className="date">{item.duration}</span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ExhibitionSection;
