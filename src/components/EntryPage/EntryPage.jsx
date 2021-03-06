import React from 'react';
import Header from '../shared/Header.jsx';
import Footer from '../shared/Footer.jsx';
import LoginForm from './LoginForm.jsx';
import CreateAccount from './CreateAccount.jsx';

export default function EntryPage() {
  return (
    <>
      <Header />
      <main className="h-screen flex space-x-16 place-items-center place-content-center bg-daWhite">
        <section id="Login" className="filter drop-shadow-lg shadow-lg m-4 h-3/5 w-1/3 border-2 border-solid border-daBlueGreen rounded ">
          <LoginForm />
        </section>
        <section id="Create-Account" className="filter drop-shadow-lg shadow-lg m-4 h-3/5 w-1/3 flex flex-col items-center border-daBlueGreen border-2 border-solid">
          <h2 className="text-4xl text-daBlueGreen">Create Account</h2>
          <CreateAccount />
        </section>
      </main>
      <Footer />
    </>
  )
}