import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Shared/Header.jsx';
import Footer from './components/Shared/Footer.jsx';
import EntryPage from './components/EntryPage/EntryPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import ResultPage from './components/ResultPage/ResultPage.jsx';
import AboutPage from './components/AboutPage/AboutPages.jsx';


export default function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <EntryPage />
          </Route>
          <Route exact path="/search">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="/result/:ticker">
            <ResultPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

