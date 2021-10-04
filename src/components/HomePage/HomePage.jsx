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
        <section>
          <SavedCompanies />
        </section>
        <section>
          <TickerSearch />
        </section>
      </main>
      <Footer />
    </>
  )
}