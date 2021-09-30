import React from 'react';
import Header from '../shared/header.jsx';
import Footer from '../shared/footer.jsx';
import LoginForm from './LoginForm.jsx';
import CreateAccount from './CreateAccount.jsx';


export default function EntryPage() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <section className="flex flex-wrap justify-around">
          <section id="Login" className="m-4 bg-blue-700 border-2 border-solid border-blue-800 border-opacity-70 rounded ">
            <LoginForm />
          </section>
          <section id="Create-Account" className="flex flex-col justify-items-center m-4 w-80 bg-blue-700 border-2 border-solid border-blue-800 border-opacity-70 rounded ">
            <h2 className="flex-1">Create A New Account</h2>
            <CreateAccount />
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}