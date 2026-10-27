import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Lstnt from './Lstnt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Lstnt notes={[9,11,17,8]}
  min={12} moyad={10}/>
  </React.StrictMode>
);
//(
  //<React.StrictMode>
    //<Compnpm nom="pr1" age={20}/>
   //<Compnpm2 nom="pr1"
    //retour1={true}  sexe="H" age={20}/>
  //</React.StrictMode>
//)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
