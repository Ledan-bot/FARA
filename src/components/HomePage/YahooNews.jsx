import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import {VscLoading} from 'react-icons/vsc';
import Article from '../shared/Article.jsx';

export default function YahooNews() {
  let [newsArticles, updateNewsArticles] = useState('')
  let [articlesShowing, updateArticlesShowing] = useState(5)


  useEffect(() => {
    Axios.get('/yahoo/news')
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
      <section className="w-96 flex flex-col items-center bg-daGreenBlue">
        {fiveArticles.map((article, index) =>
          <div key={index}>
            <Article article={article} />
          </div>
        )}
      </section>
    )
  }
}