import React from 'react';
import PropTypes from 'prop-types';

const ShortUrl = ({ shortUrl, originalUrl }) => (
  <>
    <p>{originalUrl} - <a href={shortUrl}>{shortUrl}</a></p>
  </>

);

ShortUrl.propTypes = {
  shortUrl: PropTypes.string.isRequired,
  originalUrl: PropTypes.string.isRequired
};

export default ShortUrl;

