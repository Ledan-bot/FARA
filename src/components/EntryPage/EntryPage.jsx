import React from 'react';
import Header from '../shared/Header.jsx';
import Footer from '../shared/Footer.jsx';
import LoginForm from './LoginForm.jsx';
import CreateAccount from './CreateAccount.jsx';
import YahooNews from './YahooNews.jsx';

export default function EntryPage() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <section className="flex flex-wrap justify-around bg-gradient-to-r from-white via to-gray-400">
          <section id="Login" className="m-4 w-60 bg-indigo-800 border-2 border-solid border-indigo-800 border-opacity-70 rounded ">
            <LoginForm />
          </section>
          <section id="Create-Account" className="flex flex-col items-center m-4 w-80 bg-indigo-800 border-2 border-solid border-indigo-800 border-opacity-70 rounded ">
            <h2 className="flex-1 text-gray-300">Create A New Account</h2>
            <CreateAccount />
          </section>
        </section>
        <section>
          <YahooNews />
        </section>
      </main>
      <Footer />
    </>
  )
}