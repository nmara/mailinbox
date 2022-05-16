import React from "react";
import { getShortDate } from "../utils/date";

const EmailListItem = ({
  id,
  from,
  subject,
  snippet,
  sentDate,
  unread,
  onClick,
  toggleEmailReadStatus,
}) => {
  const formattedSnippet =
    snippet.length > 60 ? snippet.slice(0, 60) + "..." : snippet;
  const formattedDate = getShortDate(sentDate);
  return (
    <tr
      className={`email-list__item ${unread ? "unread" : ""}`}
      onClick={() => onClick(id)}
      tabIndex={0}
    >
      <td className="email-list__item__sender">{from}</td>
      <td className="email-list__item__text">
        <span className="email-list__item__subject">{subject}</span>
        {snippet && (
          <span className="email-list__item__snippet">
            {` - ${formattedSnippet}`}
          </span>
        )}
      </td>
      <td>{formattedDate}</td>
      <td className="checkbox-container" onClick={(e) => e.stopPropagation(e)}>
        <label>
          <input
            type="checkbox"
            checked={unread}
            onChange={() => toggleEmailReadStatus(id, false)}
          />
          <span className="checkmark" />
          Nieprzeczytane
        </label>
      </td>
    </tr>
  );
};

export default EmailListItem;
