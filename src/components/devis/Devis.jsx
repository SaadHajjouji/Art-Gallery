import React, { useContext, useRef, useState } from "react";
import { context } from "../../API/DataCenter";
import Layout from "../Layout";
import "../../sass/_main.scss";
import validator from "validator";
import axios from "../../utils/axios";
import RequestRecieved from "./RequestRecieved";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
const Devis = (props) => {
  const idFromUrl = useParams().id;
  const { exhibitions } = useContext(context);
  const artworks = exhibitions.map((el) => el.artworks).flat();
  const clickedArtwork = artworks.find((el) => +el.id === Number(idFromUrl));
  const [userInput, setUserInput] = useState();
  const [errorMsg, seterrorMsg] = useState(false);
  const [devisRecieved, setdevisRecieved] = useState(false);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const form = useRef();
  const history = useHistory();
  const inputChanges = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
      piece: `${clickedArtwork.artists},${clickedArtwork.title},${clickedArtwork.dimensions},${clickedArtwork.medium}`,
      artworkId: clickedArtwork.id,
      date: today,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (userInput === undefined) {
      setUserInput({
        fullname: "",
        email: "",
        piece: "",
        artworkId: "",
        phone: "",
      });
    } else {
      if (
        userInput.fullname === undefined ||
        userInput.fullname === "" ||
        userInput.email === undefined ||
        userInput.email === "" ||
        userInput.phone === "" ||
        !validator.isEmail(userInput.email) ||
        isNaN(+userInput.phone)
      ) {
        seterrorMsg(true);
      } else {
        axios
          .post("commandes.json", userInput)
          .then((res) => {
            setdevisRecieved(true);
            form.current.reset();
            setTimeout(() => {
              setdevisRecieved(false);
            }, 4000);
          })
          .then(() => {
            setTimeout(() => {
              history.push("/");
            }, 4000);
          });
      }
    }
  };
  return (
    <Layout>
      {devisRecieved ? <RequestRecieved /> : ""}
      <section className="devisSection">
        <div
          className=" formAndImgBox container d-flex justify-content-between "
          style={{ margin: "0 auto", width: "100%" }}
        >
          <form ref={form} style={{ width: "40%" }}>
            <h1 className="heading">DEMANDE DE DEVIS</h1>

            {errorMsg ? (
              <span className="text-danger fs-4 mb-4 d-block">
                Please make sure your information is correct
              </span>
            ) : (
              ""
            )}
            <div className="form-floating  mb-3">
              <input
                onChange={(e) => inputChanges(e)}
                name="fullname"
                type
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Fullname</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => inputChanges(e)}
                name="email"
                type="email"
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => inputChanges(e)}
                type="tel"
                name="phone"
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Phone</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={`${clickedArtwork.artists}, ${clickedArtwork.title}, ${clickedArtwork.dimensions}, ${clickedArtwork.medium}`}
                type
                className="form-control "
                disabled
              />
              <label>Reference</label>
            </div>
            <div className="submitButton col-12">
              <button onClick={(e) => submitForm(e)} className="btn btn-dark ">
                Submit
              </button>
            </div>
          </form>
          <div className="imagebox">
            <span className="fs-4 d-block text-center">
              {` ref: ${clickedArtwork.artists}, ${clickedArtwork.title}, ${clickedArtwork.dimensions}, ${clickedArtwork.medium}`}{" "}
            </span>
            <img
              style={{ width: "100%", height: "100%" }}
              src={
                window.location.origin + "/artworks/" + clickedArtwork.artwork
              }
              className="img-fluid d-block "
              alt={clickedArtwork.title}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Devis;
