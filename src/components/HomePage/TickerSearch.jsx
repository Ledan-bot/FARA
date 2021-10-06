import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios'

export default function TickerSearch() {
  let [input, updateInput] = useState('');

  let history = useHistory();

  const searchTicker = (e) => {
    e.preventDefault();
    history.push(`/result/${input}`)

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