import React, {useState, useEffect} from 'react';
import Footer from '../Shared/Footer.jsx'
import Header from '../Shared/Header.jsx'
import SavedCompanies from './SavedCompanies.jsx';
import TickerSearch from './TickerSearch.jsx';

export default function HomePage() {

  return (
    <>
      <Header />
      <main>
        <section className="h-screen flex flex-wrap justify-around bg-gradient-to-r from-white via to-gray-400">
          <section className="m-4 w-60 border-2 border-solid border-daBlueGreen border-opacity-70 rounded">
            <SavedCompanies />
          </section>
          <section className="flex flex-col items-center m-4 w-80 border-2 border-solid border-daBlueGreen border-opacity-70 rounded ">
            <TickerSearch />
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}