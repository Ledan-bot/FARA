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
    <form onSubmit={searchTicker} className=" w-full flex flex-col items-center">
      <p className="text-daBlue text-4xl my-8">Stock Ticker:</p>
      <input type="text" size='15' maxLength="30" onChange={e => updateInput(e.target.value)} className="w-3/5 my-4"/>
      <button type="Submit" className="bg-daGreen rounded-full py-3 px-6">Search</button>
    </form>
  )
}