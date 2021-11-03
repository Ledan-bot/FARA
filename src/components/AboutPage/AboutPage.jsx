import React, {useState, useEffect} from 'react';
import Footer from '../Shared/Footer.jsx'
import Header from '../Shared/Header.jsx'
import AboutApp from './AboutApp.jsx';
import AboutMe from './AboutMe.jsx';

export default function AboutPage() {
   return (
     <>
      <Header />
      <main>
        <AboutApp />
        <AboutMe />
      </main>
      <Footer />
     </>
   )
}