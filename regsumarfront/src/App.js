/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import{Route}from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login'

import './App.css';

function App() {
 
return (
  <React.Fragment>
    <Route exact path = "/" component={Login}/>
    <Route exact path = "/home/:pagina/:id" component={Home}/>
    {/* <Route exact path="/sumario" component={DescriptionSUM} />
    <Route exact path="/sumario/novo" component={SumarioAdd} /> */}
  </React.Fragment>
);
}
export default App;
