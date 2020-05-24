import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default}/>
          </Switch>
        </main>
      </Router>
      
    );
  }
}

export default App;
