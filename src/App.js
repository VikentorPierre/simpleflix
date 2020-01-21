import React from 'react';
import Navbar from './components/widgets/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Photoshot from './components/photoshot';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
//import backgroundImg from './img/Simpleflix.jpg';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/photoshoot' component={Photoshot} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
