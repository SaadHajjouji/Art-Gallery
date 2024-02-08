import React, { useContext, useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { context } from "../../API/DataCenter";
import { useMediaQuery } from "react-responsive";

const Slider = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 80em)",
  });
  const { exhibitions } = useContext(context);
  const data = exhibitions;
  ///set current slide element
  const [current, setcurrent] = useState(0);
  /// timeout for slide to start
  const [timeout, settimeout] = useState(null);
  useEffect(() => {
    /// setting the state with the time out so i can access it fom anywhere

    settimeout(
      setTimeout(() => {
        setcurrent(current === data.length - 1 ? 0 : current + 1);
      }, 3500)
    );
    // ritz casablanca format 60 40cm
    return () => clearTimeout(timeout);
  }, [data.length, current]);
  const selectSlide = function (i) {
    clearTimeout(timeout);
    setcurrent(i);
  };
  const selectNext = () => {
    clearTimeout(timeout);

    setcurrent(current >= data.length - 1 ? 0 : current + 1);
  };
  const selectPrev = () => {
    clearTimeout(timeout);

    setcurrent(current === 0 ? data.length - 1 : current - 1);
  };
  return (
    <div className="flexingSlider">
      <FontAwesomeIcon
        onClick={() => selectPrev()}
        className="iconSlide"
        icon={faChevronLeft}
      />
      <section className="Slider">
        {data.map((item, i) => {
          return (
            <div
              key={item.id}
              className={i === current ? "Slider_item" : "d-none Slider_item"}
              style={{
                backgroundImage: `url(${
                  window.location.origin + "/galleryImages/" + item.galImage
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${
                  item.artists === "RAHMA LHOUSSIG" ? "contain" : "cover"
                }`,
                backgroundPosition: "center",
              }}
            >
              <div className={`info text-${item.textColor}`}>
                <span className="info--name ">{item.artists}</span>
                <div className="info--titles">
                  <span className="info__titles-title">{item.titleEng}</span>
                  <span className="info__titles-title">{item.titleFR}</span>
                </div>
                <div className="info--date">
                  <span className="date">{item.duration}</span>
                </div>
                {item.duration === "" ? (
                  ""
                ) : (
                  <div
                    className={
                      isMobile
                        ? "btn_learnMore border-black text-black"
                        : `btn_learnMore border-${item.textColor} text-${item.textColor}`
                    }
                  >
                    <Link to={`/exhibition/${item.id}`}>Learn More</Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="Slider__buttons">
          {data.map((item, i) => {
            return (
              <button
                key={item.id}
                onClick={() => selectSlide(i)}
                className={
                  i === current
                    ? "black Slider__buttons-btn"
                    : "Slider__buttons-btn"
                }
              ></button>
            );
          })}
        </div>
      </section>
      <FontAwesomeIcon
        onClick={() => selectNext()}
        className="iconSlide"
        icon={faChevronRight}
      />
    </div>
  );
};

export default Slider;
