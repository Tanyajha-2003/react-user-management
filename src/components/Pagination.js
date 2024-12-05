import React from 'react';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
