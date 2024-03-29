import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Modal from './components/Modal'

export default class App extends Component {
  render() {
    return(
        <React.Fragment>
        <Navbar/>
        <Switch>
        <Route exact path="/" component=
        {ProductList} />
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal/>
      </React.Fragment>
    )
  }
}



