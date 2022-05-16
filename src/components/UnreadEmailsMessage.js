import React, { useState, useEffect } from "react";

const UnreadEmailsMessage = ({ data }) => {
  const [unreadEmails, setUnreadEmails] = useState(0);
  useEffect(() => {
    if (data !== []) {
      const unreadEmails = data.filter(
        (item) => item.is_unread === true
      ).length;
      setUnreadEmails(unreadEmails);
    }
  }, [data, setUnreadEmails]);
  return (
    <div className="mailbox__unread-emails-message">
      <div className="mailbox__unread-emails-message__container">
        <h2>Masz {unreadEmails} nieprzeczytanych wiadomości</h2>
      </div>
    </div>
  );
};

export default UnreadEmailsMessage;
