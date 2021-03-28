import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { selectUser } from './features/appSlice';
import Auth from './views/Auth';
import Homepage from './views/Homepage';
import Profile from './views/Profile';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app min-vh-100 bg-dark d-flex flex-column">
      {!user ? (
        <Auth />
      ): (
        <Router>
          <Route path="/" component={Navbar} />
          <Route path="/" exact component={Homepage} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/:username" exact component={Profile} />
          <Route path="/" component={Footer} />
        </Router>
      )}
    </div>
  );
}

export default App;
