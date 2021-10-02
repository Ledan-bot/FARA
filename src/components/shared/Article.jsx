import React from 'react';

export default function Article({ article }) {
  console.log(article)
  return (
    <>
      <section className="my-2 flex flex-col border-solid border-indigo-800 border-2 rounded-md bg-gray-300">
        <h3>{article.title}</h3>
        <a href={article.link}>Check it out!</a>
        <p>Source: {article.source}</p>
        <p>Published: {article.pubDate}</p>
      </section>
    </>
      )
}