import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export const Body = ({ love }) => (
  <div className="Body">React + Redux = {love}</div>
);

const mapStateToProps = (state) => ({
  love: state.data.love,
});

Body.propTypes = {
  love: PropTypes.string,
};

export default connect(mapStateToProps)(Body);
