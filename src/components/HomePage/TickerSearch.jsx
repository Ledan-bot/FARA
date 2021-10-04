import React, {useState, useEffect} from 'react';
import Axios from 'axios'

export default function TickerSearch() {
  let [input, updateInput] = useState('');

  const searchTicker = (e) => {
    e.preventDefault();
    Axios.get('/api/search/:ticker', { params: {ticker: input}})


  }

  return (
    <form onSubmit={searchTicker}>
      <p>Stock Ticker:</p>
      <input type="text" size='15' maxLength="30" onChange={e => updateInput(e.target.value)} />
      <br />
      <button type="Submit">Search</button>
    </form>
  )
}