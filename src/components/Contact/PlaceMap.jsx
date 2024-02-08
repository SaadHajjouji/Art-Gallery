import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const map = ({ setmap }) => {
  return (
    <div className="map">
      <FontAwesomeIcon
        onClick={() => setmap(false)}
        className="cancelMap"
        icon={faTimes}
      />
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.476502733657!2d-7.644041784847498!3d33.59293894924154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d38d92b11da7%3A0x99b25e1c52d03edf!2sCDA%20GALLERY!5e0!3m2!1sen!2sma!4v1636620284601!5m2!1sen!2sma"
        width={800}
        height={600}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default map;
