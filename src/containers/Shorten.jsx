import React, { useEffect, useState } from 'react';
import ShortenForm from '../components/form/ShortenForm';
import ShortUrlList from '../components/short/ShortUrlList';
import { createLink, fetchLinks } from '../services/shortenApi';

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinks()
      .then(links => setLinks(links));
  }, []);

  const handleChange = ({ target }) => setUrl(target.value);

  const handleSubmit = event => {
    event.preventDefault();

    createLink(url)
      .then(links => setLinks(ls => [...ls, links]));
  };

  return (
    <>
      <ShortenForm 
        url={url}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ShortUrlList links={links}/>
    </>
  );
};

export default Shorten;
