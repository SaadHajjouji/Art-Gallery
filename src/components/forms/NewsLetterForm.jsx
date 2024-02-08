import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import validator from "validator";
import axios from "../../utils/axios";
const NewsLetterForm = ({ setformModal, setConfirmation, setMenu }) => {
  const [userInput, setUserInput] = useState({});
  const [correctInfoMsg, setCorrectInfoMsg] = useState(false);
  const [incoming, setIncoming] = useState([]);
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("emails.json").then((res) => {
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

  const sendData = (e) => {
    e.preventDefault();
    // emailExists();
    if (
      userInput.firstName === "" ||
      userInput.lastName === "" ||
      userInput.email === undefined ||
      !validator.isEmail(userInput.email) ||
      userInput.title === "Title"
    ) {
      setCorrectInfoMsg(true);
    } else {
      ///checks if email already exists
      const exists = incoming.some((el) => el.email === userInput.email);
      if (exists) {
        setConfirmation("old");
        setCorrectInfoMsg(false);
        setMenu(false);
        // if email already exists
        setTimeout(() => {
          setConfirmation("");
        }, 2600);
        setformModal(false);
      } else {
        axios.post("emails.json", userInput).then((res) => {
          setConfirmation("new");
          setCorrectInfoMsg(false);
          setformModal(false);
          setMenu(false);
          // if email already exists
          setTimeout(() => {
            setConfirmation("");
          }, 2600);
        });
      }
    }
  };
  return (
    <>
      <div className="popupForm">
        <FontAwesomeIcon
          onClick={() => setformModal(false)}
          className="icon"
          icon={faTimes}
        />
        <div className="logo">
          <img
            src={window.location.origin + "/logoCDA.png"}
            alt="CDA GALLERY LOGO"
          />
        </div>
        <span className="subscribeheader">SUBSCRIBE TO OUR NEWSLETTER</span>
        {correctInfoMsg ? (
          <span className="fs-3 mb-3 text-center d-block text-danger">
            Please make sure your information is correct
          </span>
        ) : (
          ""
        )}

        <form className="form">
          <select name="title" onChange={(e) => handleChange(e)}>
            <option defaultValue value="title">
              Title
            </option>
            <option value="Mr.">Mr.</option>
            <option value="Mme.">Mme.</option>
            <option value="Mlle.">Mlle.</option>
          </select>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className=""
            name="firstName"
            placeholder="First Name"
          />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            className=""
            name="lastName"
            placeholder="Last Name"
          />
          <div className="emailAndbtn">
            <input
              onChange={(e) => handleChange(e)}
              placeholder="Email"
              type="email"
              name="email"
              id=""
            />
            <button onClick={(e) => sendData(e)}>OK</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewsLetterForm;
