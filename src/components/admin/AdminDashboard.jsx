import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "../../sass/_main.scss";
import axios from "../../utils/axios";
import PopArtwork from "./PopArtwork";
const AdminDashboard = () => {
  const history = useHistory();
  const item = localStorage.getItem("email");
  ///if local storage doesnt have email take use to homepage
  if (item === null) {
    history.push("*");
  }
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newsLetter, setNewsletter] = useState([]);
  // img appears to clicked id
  const [artId, setArtId] = useState("");
  const [imgAppear, setImgAppear] = useState(false);
  const appearAndSetId = (id) => {
    setArtId(id);
    setImgAppear(true);
  };
  const adminLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    axios.get("commandes.json").then((res) => {
      let dataValues = [];
      // the data comes in an object so turned it into an array of keys and values
      const data = Object.entries(res.data);
      //iterated over the data to only get the values and stored then to an empty table (dataValues)
      for (const [_, value] of data) {
        dataValues.push(value);
      }
      setOrders(dataValues);
    });

    axios.get("emails.json").then((res) => {
      let dataValues = [];
      // the data comes in an object so turned it into an array of keys and values
      const data = Object.entries(res.data);
      //iterated over the data to only get the values and stored then to an empty table (dataValues)
      for (const [_, value] of data) {
        dataValues.push(value);
      }
      setNewsletter(dataValues);
    });

    axios.get("messages.json").then((res) => {
      let dataValues = [];
      // the data comes in an object so turned it into an array of keys and values
      const data = Object.entries(res.data);
      //iterated over the data to only get the values and stored then to an empty table (dataValues)
      for (const [_, value] of data) {
        dataValues.push(value);
      }
      setMessages(dataValues);
    });
  }, []);

  return (
    <div className="admindashboard">
      {imgAppear ? <PopArtwork setImgAppear={setImgAppear} id={artId} /> : ""}
      <section className="head">
        <img
          src={window.location.origin + "/logoCDA.png"}
          alt="CDA GALLERY LOGO"
        />
        <button onClick={() => adminLogout()} className="btn btn-outline-dark">
          Logout
        </button>
      </section>

      <section className="orders">
        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FullName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">artwork</th>
              <th scope="col">Reference</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{el.fullname}</td>
                  <td>{el.email}</td>
                  <td>{el.phone}</td>
                  <td>
                    <button
                      onClick={() => appearAndSetId(el.artworkId)}
                      className=" btn-lg btn btn-dark"
                    >
                      Artwork
                    </button>
                  </td>
                  <td>{el.piece}</td>
                  <td>{el.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="newsletterEmails">
        <h2>Newsletter emails</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {newsLetter.map((el, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{el.title}</td>
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                  <td>{el.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="messages">
        <h2>Messages</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fullname</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((el, i) => {
              return (
                <tr>
                  <th scope="row">{i}</th>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.message}</td>
                  <td>{el.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
