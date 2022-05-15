import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  React.createElement("h1", { style: { color: "blue" } }, "Heyyyyy React"),
  document.getElementById("root")
);

