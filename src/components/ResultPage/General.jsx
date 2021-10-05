import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';

export default function General() {
  let [generalInfo, updateGeneralInfo] = useState('')
  let [ticker, updateTicker] = useState('MU')
  let company = generalInfo[0]

  const formatter = new Intl.NumberFormat('en-US', {
    styles: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  useEffect(() => {
    axios.get('/api/search/:ticker/general-info', { params: {ticker: ticker }})
      .then(res => {
        updateGeneralInfo(res.data)
      })
      .catch(err => {
        alert(err)
      })
  }, [])


  if (!generalInfo) {
    return (
      <>
        <VscLoading />
      </>
    )
  } else {
    return (
      <section>
        <h3>{company.companyName}</h3>
        <p>CEO: {company.ceo}</p>
        <p>Last Closing Price: ${formatter.format(company.price)}</p>
        <p>Beta: {company.beta}</p>
        <p>Exchange: {company.exchange}</p>
        <p>Industry: {company.industry}</p>
        <p>Website: {company.website}</p>
        <p>{company.description}</p>
      </section>
    )
  }
}