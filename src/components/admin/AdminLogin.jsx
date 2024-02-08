import React, { useState } from "react";
import { useHistory } from "react-router";
import "../../sass/_main.scss";
import { auth } from "../../utils/firebase";

const AdminLogin = () => {
  const [access, setAccess] = useState({});
  const [errormsg, seterrormsg] = useState("");
  const history = useHistory();
  const inputChanges = (e) => {
    setAccess({ ...access, [e.target.name]: e.target.value });
  };
  const checkData = (e) => {
    e.preventDefault();
    const email = access.email;
    const password = access.password;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((creds) => {
        localStorage.setItem("email", email);
        history.push("/adminDash");
      })
      .catch((err) => {
        if (err) seterrormsg("Please enter the correct data");
      });
  };
  return (
    <section className="loginPage">
      <img
        src={window.location.origin + "/logoCDA.png"}
        alt="CDA GALLERY LOGO"
      />
      <form>
        <span className="text-center fs-2 text-danger">{errormsg}</span>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => inputChanges(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => inputChanges(e)}
          />
        </div>

        <button
          onClick={(e) => checkData(e)}
          type="submit"
          className="btn btn-dark"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;
