import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Auth from './views/Auth';
import Homepage from './views/Homepage';
import Profile from './views/Profile';

function App() {
  const user = null;

  return (
    <div className="app min-vh-100 bg-dark d-flex flex-column">
      {!user ? (
        <Auth />
      ): (
        <Router>
          <Route path="/" component={Navbar} />
          <Route path="/" exact component={Homepage} />
          <Route path="/profile/:username" exact component={Profile} />
          <Route path="/" component={Footer} />
        </Router>
      )}
    </div>
  );
}

export default App;
