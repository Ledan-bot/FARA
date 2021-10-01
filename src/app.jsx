import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Shared/Header.jsx'
import Footer from './components/Shared/Footer.jsx'
import EntryPage from './components/EntryPage/EntryPage.jsx'


export default function App() {

  return (
    <>
      {/* <Header />
      <main className="h-screen">
        <h2>HELLO WORLD</h2>
      </main>
      <Footer /> */}
      <EntryPage />
    </>
  )
}