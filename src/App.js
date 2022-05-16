import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import rawData from "./data";
import Header from "./components/Header";
import UnreadEmailsMessage from "./components/UnreadEmailsMessage";
import EmailList from "./components/EmailList";
import Email from "./components/Email";
import Error from "./components/Error";
import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [updatedList, setUpdatedList] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (rawData.length > 0) {
      setData(rawData);
    } else {
      setError(true);
    }
  }, []);
  const handleEmailReadStatus = (id, forceToFalse) => {
    const updatedData = [...data];
    const emailIndex = updatedData.findIndex((item) => item.id === Number(id));
    const currentReadStatus = updatedData[emailIndex].is_unread;
    updatedData[emailIndex].is_unread = forceToFalse
      ? false
      : !currentReadStatus;
    setData(updatedData);
  };
  const handleListUpdate = useCallback(
    (updatedList) => {
      setUpdatedList(updatedList);
    },
    [setUpdatedList]
  );
  return (
    <div className="mailbox">
      <Header />
      {error && (
        <Error errorMessage="Przepraszamy! Coś poszło nie tak. Spróbuj ponownie później." />
      )}
      {!error && data && data !== [] && (
        <>
          <UnreadEmailsMessage data={data} />
          <div className="mailbox__container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <EmailList
                    data={data}
                    updatedList={updatedList}
                    handleListUpdate={handleListUpdate}
                    handleEmailReadStatus={handleEmailReadStatus}
                  />
                }
              />
              <Route path="email/:emailId" element={<Email data={data} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
