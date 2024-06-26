import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/reset.css';
import 'react-loading-skeleton/dist/skeleton.css';
import App from '@/App.tsx';
import { GlobalStyle } from '@/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
);
