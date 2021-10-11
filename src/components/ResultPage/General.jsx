import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';

export default function General({ ticker }) {
  let [generalInfo, updateGeneralInfo] = useState('')
  // let [ticker, updateTicker] = useState('MU')
  let company = generalInfo[0]

  const formatter = new Intl.NumberFormat('en-US', {
    styles: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  useEffect(() => {
    axios.get('/api/search/:ticker/general-info', { params: { ticker: ticker } })
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
      <section className="flex flex-row divide-x-4 divide-solid divide-daGreen py-5">
        <section id="gen-info" className="flex flex-col justify-center items-center place-content-around w-1/4 space-y-5 filter drop-shadow-lg shadow-lg">
          <h2 className="text-3xl">{company.companyName}</h2>
          <ul className="flex flex-col justify-center items-center place-content-around space-y-6">
            <li className="text-gray-800">CEO: {company.ceo}</li>
            <li className="text-gray-800">Symbol: {company.symbol}</li>
            <li className="text-gray-800">Industry: {company.industry}</li>
            <li className="text-gray-800">Sector: {company.sector}</li>
            <li className="text-gray-800">Exchange: {company.exchange}</li>
            <li className="text-gray-800">Website: {company.website}</li>
          </ul>
        </section>
        <section id="description" className="w-2/4 px-5 filter drop-shadow-lg shadow-lg">
          <p className="text-gray-800">{company.description}</p>
        </section>
        <section id="gen-data" className="flex flex-col justify-center items-center w-1/4 filter drop-shadow-lg shadow-lg">
          <ul className="felx flex-col justify-center items-center place-content-around space-y-6">
            <li className="text-gray-800">Price: {company.price}</li>
            <li className="text-gray-800">Beta: {company.beta} </li>
            <li className="text-gray-800">Last Closing Price: ${formatter.format(company.price)}</li>
            <li className="text-gray-800">Range: {company.range}</li>
            <li className="text-gray-800">Volume: {company.volAvg}</li>
          </ul>
        </section>
      </section>
    )
  }
}

