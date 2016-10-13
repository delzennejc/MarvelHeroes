
import React, { PropTypes } from 'react';
import times from 'lodash/times';
import { Link } from 'react-router';

export const PageList = (props) => (
  <div className="page_list">
    {
      times(props.pages, n =>
        <Link
          key={n}
          className={`page${(props.currentPage === (n + 1)) ? '--current' : ''}`}
          to={`/?page=${(n + 1)}`}
        >
          {(n + 1)}
        </Link>
      )
    }
  </div>
);

PageList.propTypes = {
  /** The number of pages */
  pages: PropTypes.number,
  /** The current page number */
  currentPage: PropTypes.number,
};

export default PageList;
