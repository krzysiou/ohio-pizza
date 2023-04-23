import React from 'react';
import ReactDOM from 'react-dom/client';
import { css, Global } from '@emotion/react';

import { Navbar, Router } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

root.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Navbar />
    <Router />
  </React.StrictMode>
);
