import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Shared/Header.jsx';
import Footer from './components/Shared/Footer.jsx';
import EntryPage from './components/EntryPage/EntryPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import ResultPage from './components/ResultPage/ResultPage.jsx';


export default function App() {

  return (
    <>
      {/* <EntryPage /> */}
      {/* <HomePage /> */}
      <ResultPage />
    </>
  )
}