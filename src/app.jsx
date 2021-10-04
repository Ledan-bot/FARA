import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Shared/Header.jsx'
import Footer from './components/Shared/Footer.jsx'
import EntryPage from './components/EntryPage/EntryPage.jsx'
import HomePage from './components/HomePage/HomePage.jsx'


export default function App() {

  return (
    <>
      {/* <EntryPage /> */}
      <HomePage />
    </>
  )
}