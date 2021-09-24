import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Shared/header.jsx'
import Footer from './components/Shared/footer.jsx'


export default function App() {

  return (
    <>
      <Header />
      <main className="h-screen">
        <h2>HELLO WORLD</h2>
      </main>
      <Footer />
    </>
  )
}