import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { apiKey } from '../../../env/config.js';
import {VscLoading} from 'react-icons/vsc';
import Article from '../shared/Article.jsx';

export default function YahooNews() {
  let [newsArticles, updateNewsArticles] = useState('')
  let [articlesShowing, updateArticlesShowing] = useState(5)


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://mboum-finance.p.rapidapi.com/ne/news',
      headers: {
        'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    };
    Axios.request(options)
      .then(res => {
        console.log(res.data)
        updateNewsArticles(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  if (!newsArticles) {
    return (
      <>
        <VscLoading />
      </>
    )
  } else if (articlesShowing === 5) {
    let fiveArticles = newsArticles.slice(0, 5)
    console.log(fiveArticles)
    return (
      <section>
        {fiveArticles.map((article, index) =>
          <div key={index}>
            <Article article={article} />
          </div>
        )}
        <p>Made it Here</p>
      </section>
    )
  }
}