import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLongDate } from "../utils/date";
import Error from "./Error";

const Email = ({ data }) => {
  const { emailId } = useParams();
  const [emailData, setEmailData] = useState(null);
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    if (data !== [] && emailId) {
      const email = data.find((item) => item.id === Number(emailId));
      if (email) {
        setEmailData(email);
      } else {
        setError(true);
      }
    }
  }, [data, emailId, setEmailData]);
  const errorMessage =
    "Przepraszamy! Email o tym ID nie figuruje w bazie danych.";
  const goToList = () => {
    navigate(`/`);
  };
  return (
    <div className="mailbox__email">
      {error && <Error errorMessage={errorMessage} />}
      {emailData && (
        <div className="mailbox__email__container">
          <button onClick={goToList} title="Wróć do listy" />
          <div className="mailbox__email__header">
            <h2>{emailData.subject}</h2>
          </div>
          <div className="mailbox__email__sub-header">
            <div className="mailbox__email__sender">{emailData.from}</div>
            <div>{getLongDate(emailData.sent_date)}</div>
          </div>
          <div
            className="mailbox__email__body"
            dangerouslySetInnerHTML={{ __html: emailData.snippet }}
          />
        </div>
      )}
    </div>
  );
};

export default Email;
