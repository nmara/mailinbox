import React from "react";

const Error = ({ errorMessage }) => {
  return <div className="mailbox__error"><h3>{errorMessage}</h3></div>;
};

export default Error;
