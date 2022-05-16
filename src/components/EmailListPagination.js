import React, { useState, useEffect } from "react";

const EmailListPagination = ({ list, updateList }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const numerOfEmailsPerPage = 10;
  const numberOfPages = Math.ceil(list.length / numerOfEmailsPerPage);
  const startIndex = numerOfEmailsPerPage * currentPage;
  const endIndex = Math.min(
    (currentPage + 1) * numerOfEmailsPerPage,
    list.length
  );
  useEffect(() => {
    const updatedList = list.slice(
      startIndex,
      numerOfEmailsPerPage + startIndex
    );
    updateList(updatedList);
  }, [currentPage, list, startIndex, updateList]);
  const handleNextPageClick = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPageClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="email-list__pagination">
      <p className="email-list__pagination__info">
        {startIndex} - {endIndex} z {list.length}
      </p>
      <button
        className="email-list__pagination__button prev"
        onClick={handlePreviousPageClick}
        disabled={currentPage === 0}
        title="Poprzednia strona"
      />
      <button
        className="email-list__pagination__button next"
        onClick={handleNextPageClick}
        disabled={currentPage >= numberOfPages - 1}
        title="Następna strona"
      ></button>
    </div>
  );
};

export default EmailListPagination;
