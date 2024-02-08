import React from "react";

const MessageProcessed = ({ alreadyExistsOrNot }) => {
  return (
    <section className="confirm">
      <img
        src={window.location.origin + "/logoCDA.png"}
        alt="CDA GALLERY LOGO"
      />
      <span className="message">
        {alreadyExistsOrNot
          ? "Your current message is being processed"
          : "Your message will be processed soon."}
      </span>
    </section>
  );
};

export default MessageProcessed;
