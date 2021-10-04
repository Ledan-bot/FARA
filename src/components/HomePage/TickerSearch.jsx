import React, {useState, useEffect} from 'react';

export default function TickerSearch() {

  return (
    <form>
      <p>Stock Ticker:</p>
      <input type="text" size='15' maxLength="30" />
      <br />
      <button type="Submit">Search</button>
    </form>
  )
}