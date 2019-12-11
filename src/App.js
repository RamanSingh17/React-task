import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route,  Switch,} from "react-router-dom";
import './App.css';
import Login from "./loginPage/login";
import PlanetList from './planets/planetList';
import Planet from './planets/planet';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />            
        <Route path="/planetlist" exact component={PlanetList} />   
        <Route path="/planet/:id" component={Planet} />         
      </Switch>
    </BrowserRouter>
  );
}

export default App;
