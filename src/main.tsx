import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@layouts/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactModal from 'react-modal';


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// root.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>
// );

const rootNode = document.getElementById('root');

ReactModal.setAppElement('#root');


ReactDOM.createRoot(rootNode as Element | DocumentFragment).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode>, */}
  </BrowserRouter>

);
