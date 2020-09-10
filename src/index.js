import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from '../src/componentes/Header'
import Presentacion from '../src/componentes/Presentacion'
import Portafolio from '../src/componentes/Portafolio'
import Curriculum from '../src/componentes/Curriculum'
import Acerca_de from '../src/componentes/Acerca_de'
import Testimonio from '../src/componentes/Testimonio'
import Servicios from '../src/componentes/Servicios';
import Blog from '../src/componentes/Blog'
import Contacto from '../src/componentes/Contacto'
import Redes from '../src/componentes/Redes'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Presentacion/>
    <Portafolio/>
    <Curriculum/>
    <Acerca_de/>
    <Testimonio/>
    <Servicios/>
    <Blog/>
    <Contacto/>
    <Redes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
