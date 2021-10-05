import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function KeyMetrics() {
  let [metrics, updateMetrics] = useState('')
  let [ticker, updateTicker] = useState('')

  const formatter = new Intl.NumberFormat('en-US', {
    styles: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  useEffect(() => {
    axios.get('/api/search/:ticker/key-metrics', { params: { ticker: ticker } })
      .then(res => {
        updateMetrics(res.data)
      })
      .catch(err => {
        alert(err)
      })
  })
}