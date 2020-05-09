/* const element = document.createElement("h1"); //creamos elemntos 
element.innerText = "Jovenes Programadores"; // El texto que vamos colocar 

const container = document.getElementById('root') //Creamos la variable que obtiene el ID

container.appendChild(element); // que qqueremos mostar

 */

import React from 'react';
import ReactDOM from 'react-dom'


const name = 'Nico';

const element = <h1>¡ Wecon to {name}  React en jovenes programadores</h1>;

const container= document.getElementById("root");

ReactDOM.render(element, container);

/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 */

