import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function EventBox({ event }) {
  const [showPopUp, setshowPopUp] = useState(false);
  return (
    <>
      <div onClick={() => setshowPopUp(!showPopUp)} className="event">
        <LazyLoadImage
          alt="her"
          effect="blur"
          src={
            window.location.origin + "/events/eventGallery/" + event.eventImage
          }
        />
        <span className="event__Name">{event.name}</span>
        <span className="event__Date">{event.date}</span>
      </div>

      <div className={showPopUp ? "popup" : "d-none"}>
        <FontAwesomeIcon
          className="close"
          onClick={() => setshowPopUp(false)}
          icon={faTimes}
        />
        <img
          className="logo"
          src={window.location.origin + "/logoCDA.png"}
          alt=""
        />
        <section className="eventInfo">
          <h3>{event.name}</h3>
          <span className="eventDate">{event.date}</span>
          <img
            className="poster"
            src={
              window.location.origin +
              "/events/eventGallery/" +
              event.eventImage
            }
            alt=""
          />
        </section>
        <section className="eventParagraph">
          <p>{event.description.fr}</p>
        </section>
        {event.description.eng !== "" ? (
          <section className="eventParagraph">
            <p>{event.description.eng}</p>
          </section>
        ) : (
          ""
        )}

        <section className="popupEventGallery">
          {event.gallery.map((el) => {
            return (
              <img
                key={el.id}
                src={window.location.origin + "/events/eventGallery/" + el}
                alt={event.name}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default EventBox;
