import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import parcel_box_icon from './assets/parcel.svg'
import secure_icon from './assets/secure.svg'
import scheduling_icon from './assets/scheduling.svg'
import support_icon from './assets/support.svg'
import bulk_icon from './assets/bulk.svg'
import profitable_icon from './assets/profitable.svg'


export{
  parcel_box_icon,
  secure_icon,
  scheduling_icon,
  support_icon,
  bulk_icon,
  profitable_icon
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
