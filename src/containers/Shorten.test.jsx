import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Shorten from './Shorten';

const server = setupServer(
  rest.post('api/v1/shorten', (req, res, ctx) => {
    return res(ctx.json({
      id: 'abcd9876',
      originalUrl: req.body.url
    }));
  }),
  rest.get('api/v1/shorten', (req, res, ctx) => {
    return res(ctx.json([
      { id: 'abcd1234', originalUrl: 'http://test.com/long/url/0' },
      { id: 'abcd1234', originalUrl: 'http://test.com/long/url/1' },
      { id: 'abcd1234', originalUrl: 'http://test.com/long/url/2' }
    ]));
  })
);

describe('Shorten container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('creates a short url with form submission', async() => {
    render(<Shorten />);

    const urlInput = screen.getByLabelText('URL');
    const submitButton = screen.getByText('Shorten');

    fireEvent.change(urlInput, {
      target: {
        value: 'http://example.com/this/is/very/long'
      }
    });

    fireEvent.click(submitButton);

    return waitFor(() => {
      screen.getByText('http://example.com/this/is/very/long', { exact: false });
    });
  });

  it('populates a list of links on mount', () => {
    render(<Shorten />);

    return waitFor(() => {
      screen.getByText('http://test.com/long/url/0', { exact: false });
      screen.getByText('http://test.com/long/url/1', { exact: false });
      screen.getByText('http://test.com/long/url/2', { exact: false });
    });
  });


});
