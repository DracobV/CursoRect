import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  color: "red"
}

function tictac(){
  const element = (
    <div>
        <h1 style={style}> Reloj en React!</h1>
        <h2> Son las {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  const container = document.getElementById('root');
  ReactDOM.render(element, container);

}

setInterval(tictac,1000);



/* const name = 3*4;

const element = <h1> {name} </h1>;

const container= document.getElementById("root");

ReactDOM.render(element, container); */

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

