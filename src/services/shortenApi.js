const API_URL = process.env.SHORTEN_API_URL;

export const createLink = url => {
  return fetch(`${API_URL}/api/v1/shorten`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })
    .then(res => res.json())
    .then(json => ({
      shortUrl: `${API_URL}/${json.id}`,
      originalUrl: json.originalUrl
    }));
};

export const fetchLinks = () => {
  return fetch(`${API_URL}/api/v1/shorten`)
    .then(res => res.json())
    .then(json => json.map(link => ({
      shortUrl: `${API_URL}/${link.id}`,
      originalUrl: link.originalUrl
    })));
};
