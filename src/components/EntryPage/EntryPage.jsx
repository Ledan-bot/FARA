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
          <section id="Login">
            <LoginForm />
          </section>
          <section id="Create-Account">
            <CreateAccount />
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}