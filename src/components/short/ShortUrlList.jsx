import React from 'react';
import PropTypes from 'prop-types';
import ShortUrl from './ShortUrl';

const ShortUrlList = ({ links }) => {
  const linkElements = links.map(link => (
    <li key={link.shortUrl}>
      <ShortUrl {...link} />
    </li>
  ));

  return (
    <ul>
      {linkElements}
    </ul>
  );
};

ShortUrlList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    shortUrl: PropTypes.string.isRequired,
    originalUrl: PropTypes.string.isRequired
  })).isRequired
};

export default ShortUrlList;

