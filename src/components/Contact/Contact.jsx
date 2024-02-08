import React, { useRef, useState } from "react";
import Layout from "../Layout";
import PlaceMap from "./PlaceMap";
import "../../sass/_main.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faClock,
  faMap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import validator from "validator";
import axios from "../../utils/axios";
import MessageProcessed from "./MessageProcessed";
import { useEffect } from "react";
const Contact = () => {
  const form = useRef();
  const [map, setmap] = useState(false);
  const [userInput, setuserInput] = useState({});
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const [errorMsg, seterrorMsg] = useState(false);
  const [messageRecieved, setMessageRecieved] = useState();
  const [alreadyExistsOrNot, setalreadyExistsOrNot] = useState(false);
  const [incoming, setIncoming] = useState([]);
  useEffect(() => {
    axios.get("messages.json").then((res) => {
      let dataValues = [];
      // the data comes in an object so turned it into an array of keys and values
      const data = Object.entries(res.data);
      //iterated over the data to only get the values and stored then to an empty table (dataValues)
      for (const [_, value] of data) {
        dataValues.push(value);
      }
      setIncoming(dataValues);
    });
  }, []);

  const inputChanges = (e) => {
    setuserInput({
      ...userInput,
      [e.target.name]: e.target.value,
      date: today,
    });
  };
  //   manages the visibility of the map
  const sendMessage = (e) => {
    e.preventDefault();
    if (userInput === undefined) {
      setuserInput({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } else {
      if (
        userInput.name === undefined ||
        userInput.name === "" ||
        userInput.message === "" ||
        userInput.email === undefined ||
        userInput.email === "" ||
        userInput.phone === "" ||
        !validator.isEmail(userInput.email) ||
        isNaN(+userInput.phone)
      ) {
        seterrorMsg(true);
      } else {
        const exists = incoming.some((el) => el.email === userInput.email);
        if (exists) {
          setMessageRecieved(true);
          setalreadyExistsOrNot(true);
          setTimeout(() => {
            setMessageRecieved(false);
          }, 4000);
        } else
          axios.post("messages.json", userInput).then((res) => {
            setalreadyExistsOrNot(false);
            setMessageRecieved(true);
            form.current.reset();
            setTimeout(() => {
              setMessageRecieved(false);
            }, 4000);
          });
      }
    }
  };

  return (
    <div>
      <Layout>
        {messageRecieved ? (
          <MessageProcessed alreadyExistsOrNot={alreadyExistsOrNot} />
        ) : (
          ""
        )}
        {map ? <PlaceMap setmap={setmap} /> : ""}
        <section className="contactForm">
          <div className="galInfo">
            <LazyLoadImage
              effect="blur"
              src={window.location.origin + "/ASI47018.jpg"}
              alt="CDAGallery logo"
            />
            <span className="address">
              <FontAwesomeIcon icon={faMap} className="icon" />
              Rue essanaani, angles rue Chevreuil, Casablanca, 20250, Maroc
            </span>
            <span className="phone">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              (+212)664419213
              <br />
              +212 (0) 694-260065
            </span>
            <span className="email">
              <FontAwesomeIcon icon={faAt} className="icon" />
              cda.lebureau@gmail.com
            </span>
            <span className="schedule">
              <FontAwesomeIcon icon={faClock} className="icon" />
              Tuesday- Saturday: 11:00am – 7:00pm
            </span>
          </div>
          <div className="formSection">
            <h1>CONTACT US</h1>
            <form ref={form}>
              {errorMsg ? (
                <span className="text-danger fs-3 mb-4 d-block">
                  Please make sure your information is correct
                </span>
              ) : (
                ""
              )}
              <input
                onChange={(e) => inputChanges(e)}
                placeholder="name"
                name="name"
                type="text"
              />
              <input
                onChange={(e) => inputChanges(e)}
                placeholder="email"
                type="email"
                name="email"
              />
              <input
                onChange={(e) => inputChanges(e)}
                placeholder="phone"
                type="phone"
                name="phone"
              />
              <input
                onChange={(e) => inputChanges(e)}
                placeholder="message"
                type="text"
                name="message"
              />
              <button onClick={(e) => sendMessage(e)}>Send</button>
            </form>
            <button
              onClick={() => {
                setmap(!map);
              }}
              className="viewMap"
            >
              *View Map
            </button>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contact;
