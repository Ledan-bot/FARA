import React, {useState, useEffect} from 'react';
import Footer from '../Shared/Footer.jsx';
import Header from '../Shared/Header.jsx';
import KeyMetrics from './KeyMetrics.jsx';
import BalanceSheet from './BalanceSheet.jsx';
import GeneralInfo from './General.jsx';


export default function ResultPage() {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-wrap justify-around bg-gradient-to-r from-white via to-gray-400">
          <GeneralInfo />
          <BalanceSheet />
          <KeyMetrics />
        </section>
      </main>
      <Footer />
    </>
  )
}