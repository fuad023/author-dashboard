import React from "react";

export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="pagination">
      <button className="pagebtn" disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`pagebtn ${page === i + 1 ? "active" : ""}`}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="pagebtn"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
