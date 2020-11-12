import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Location from './components/Location';

import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/location" component={Location} />
        </Switch>
    </div>
  );
}

export default App;
