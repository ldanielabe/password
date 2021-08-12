// Dependecies
import React from 'react';
import { Route, Switch } from 'react-router-dom';


// Views
import Password from './views/Password';

function Router() {

  return (
    <Switch>
      <Route exact path='/' component={Password} />
     </Switch>
  );
}


export default Router;
