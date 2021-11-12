import React from 'react'
import axios from 'axios'
import Header from '../Shared/Header'
import Footer from '../Shared/Footer'

export default function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Error: Tickr not valid - please try again</h1>
      </main>
      <Footer />
    </>
  )
}