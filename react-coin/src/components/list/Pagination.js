import React from 'react';
import './Pagination.css';
import PropTypes from 'prop-types';

const Pagination = (props) => {

  const {page, totalPages, handlePaginationClick} = props;

  return (
    //the onClick method wont be called immediately now on load because we binded it
    <div className="Pagination">

      <button
        className="Pagination-button"
        onClick={() => handlePaginationClick('prev')}
        disabled={page <= 1}>
        &larr;
      </button>

      <span className="Pagination-info">
        page <b>{page}</b> of <b>{totalPages}</b>
      </span>

      <button
        className="Pagination-button"
        onClick={handlePaginationClick.bind(this,'next')}
        diabled={page >= totalPages}>
        &rarr;
      </button>

    </div>
  ); //dont forget the semi-colon here
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
}

export default Pagination;
