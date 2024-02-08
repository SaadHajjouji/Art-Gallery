import React from "react";

const FormConfirmationMessage = ({ confirmation }) => {
  const checkconfirmation = () => {
    if (confirmation === "new") {
      return "Your email was registered successfully";
    } else if (confirmation === "old") {
      return "Your email is already registered in our database";
    }
  };
  return (
    <div>
      {confirmation !== "" ? (
        <section className="confirm">
          <img
            src={window.location.origin + "/logoCDA.png"}
            alt="CDA GALLERY LOGO"
          />
          <span className="message">{checkconfirmation()}</span>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormConfirmationMessage;
