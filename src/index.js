import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  React.createElement(
    "ul", 
    null,
    React.createElement("li", null, "Uzzal Kumar Roy"),
    React.createElement("li", null, "Nasir Uddin"),
    React.createElement("li", null, "Sujon Roy"),
    React.createElement("li", null, "Juwel Rana"),
    ),
  document.getElementById("root")
);

