import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Shared/Header.jsx';
import Footer from './components/Shared/Footer.jsx';
import EntryPage from './components/EntryPage/EntryPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import ResultPage from './components/ResultPage/ResultPage.jsx';


export default function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <EntryPage />
          </Route>
          <Route path="/search">
            <HomePage />
          </Route>
          <Route path="/result">
            <ResultPage />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

