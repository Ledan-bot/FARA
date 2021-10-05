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
      <section className="flex flex-col items-center m-4 w-5/6 bg-indigo-800 border-2 border-solid border-indigo-800 border-opacity-70 rounded">
        <h3 className="text-gray-300">{company.companyName}</h3>
        <p className="text-gray-300">CEO: {company.ceo}</p>
        <p className="text-gray-300">Last Closing Price: ${formatter.format(company.price)}</p>
        <p className="text-gray-300">Beta: {company.beta}</p>
        <p className="text-gray-300">Exchange: {company.exchange}</p>
        <p className="text-gray-300">Industry: {company.industry}</p>
        <p className="text-gray-300">Website: {company.website}</p>
        <p className="text-gray-300">{company.description}</p>
      </section>
    )
  }
}