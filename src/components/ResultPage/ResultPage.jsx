import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer.jsx';
import Header from '../Shared/Header.jsx';
import KeyMetrics from './KeyMetrics.jsx';
import BalanceSheet from './BalanceSheet.jsx';
import GeneralInfo from './General.jsx';


export default function ResultPage() {

  let { ticker } = useParams();
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-wrap justify-around bg-daWhite">
          <GeneralInfo ticker={ticker}/>
          <BalanceSheet ticker={ticker}/>
          <KeyMetrics ticker={ticker}/>
        </section>
      </main>
      <Footer />
    </>
  )
}