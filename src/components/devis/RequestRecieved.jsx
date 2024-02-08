import React from "react";

const RequestRecieved = () => {
  return (
   
      <section className="confirm">
        <img
          src={window.location.origin + "/logoCDA.png"}
          alt="CDA GALLERY LOGO"
        />
        <span className="message">
          Request recieved. You will be contacted soon.
        </span>
      </section>
    
  );
};

export default RequestRecieved;
