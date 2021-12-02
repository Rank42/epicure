import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainDashboard from './components/main/MainDashboard';
import Navbar from './components/navigation/Navbar';
import RestaurantsDashboard from './components/restaurants/RestaurantsDashboard';
import Footer from './components/shared/Footer';
import "./styles/main.scss";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Switch>
    <Route path="/" exact component={MainDashboard}/>
    <Route path="/restaurants" exact component={RestaurantsDashboard}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
