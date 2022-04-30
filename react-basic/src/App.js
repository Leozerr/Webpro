import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import FullTime from './components/pages/FullTime';
import JobCard from './components/JobCard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/fulltime' component={FullTime} />
          <JobCard />
        </Switch>
      </Router>
    </>
  );
}

export default App;
