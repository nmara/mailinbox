import React from "react";
import { useNavigate } from "react-router-dom";
import EmailListPagination from "./EmailListPagination";
import EmailListItem from "./EmailListItem";

const EmailList = ({
  data,
  updatedList,
  handleListUpdate,
  handleEmailReadStatus,
}) => {
  let navigate = useNavigate();
  const handleEmailOnClick = (id) => {
    navigate(`/email/${id}`);
    handleEmailReadStatus(id, true);
  };
  return (
    <div className="mailbox__email-list">
      <EmailListPagination list={data} updateList={handleListUpdate} />
      <table>
        <thead>
          <tr>
            <th>Od</th>
            <th>Temat</th>
            <th>Wysłane</th>
            <th>Nieprzeczytane</th>
          </tr>
        </thead>
        <tbody>
          {updatedList.map((item, index) => (
            <EmailListItem
              key={index}
              id={item.id}
              from={item.from}
              subject={item.subject}
              snippet={item.snippet}
              sentDate={item.sent_date}
              unread={item.is_unread}
              index={index}
              onClick={handleEmailOnClick}
              toggleEmailReadStatus={handleEmailReadStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailList;
