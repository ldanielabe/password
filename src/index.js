// Dependecies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Router from './Router';
import './styles/sass/app.scss';


function Index() {
  return (
    <div id="root">
      <BrowserRouter>
        <Route component={Router} />
      </BrowserRouter>
    </div> 
  );
}

ReactDOM.render(<Index/>, document.getElementById('root'));

