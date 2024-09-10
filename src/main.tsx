import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@layouts/index';
import ReactModal from 'react-modal';
import './main.css';

const rootNode = document.getElementById('root');

ReactModal.setAppElement('#root');

ReactDOM.createRoot(rootNode as Element | DocumentFragment).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);