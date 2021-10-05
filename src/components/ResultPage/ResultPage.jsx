import React, {useState, useEffect} from 'react';
import Footer from '../Shared/Footer.jsx';
import Header from '../Shared/Header.jsx';
import KeyMetrics from './KeyMetrics.jsx';
import BalanceSheet from './BalanceSheet.jsx';


export default function ResultPage() {
  return (
    <>
      <Header />
      <main>
        <section>
          <BalanceSheet />
          <KeyMetrics />
        </section>
      </main>
      <Footer />
    </>
  )
}