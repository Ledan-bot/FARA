import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';


export default function EntryPage( {updateCurrentPage = f => f}) {
  const emailInput = useRef();

  const handleEmail = (e) => {
    let body = {
      email: emailInput.current.value
    }
    Axios.post('/email', body)
      .then(res => {
        alert('Thank you for subscribing')
      })
      .catch(err => {
        console.error(err)
      })
    emailInput.current.value = ''
  }
  return (
    <>
      <header className="header-container">
        <h1 className="header-title">Fundamental Analysis Research Assistant</h1>
      </header>
      <main className="main-home-container">
        <section className="container-form">
          <LoginForm updateCurrentPage={updateCurrentPage}/>
          <RegisterForm updateCurrentPage={updateCurrentPage}/>
        </section>
      </main>
      <footer className="footer-container">
        <p className="footer-text">Join our mailing list!</p>
        <p className="footer-text">Email:</p>
        <input className="footer-input" ref={emailInput} type="text" name="email" size="15" maxLength="30" />
        <button onClick={handleEmail} className="footer-button">Join!</button>
      </footer>
    </>
  )
}