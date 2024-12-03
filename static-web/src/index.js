import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for createRoot
import './index.css'; // Import global styles
import App from './App';
<script src="http://localhost:8097"></script>
// Create the root element for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
reportWebVitals();

