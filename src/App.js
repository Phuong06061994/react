import React from 'react';
import { BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Gadgets from './components/gadgets/Section_Gadgets';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={Gadgets} path="/gadgets" />
        <Route component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
