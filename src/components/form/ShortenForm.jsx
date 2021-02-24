import React from 'react';
import PropTypes from 'prop-types';

const ShortenForm = ({ url, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="url">URL</label>
    <input id="url" type="url" value={url} onChange={onChange}></input>
    <button>Shorten</button>
  </form>
);

ShortenForm.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default ShortenForm;

