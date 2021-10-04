import React from 'react';
import { FiExternalLink } from 'react-icons/fi'

export default function Article({ article }) {
  console.log(article)
  return (
    <>
      <section className="my-2 w-80 flex flex-col border-solid border-indigo-800 border-2 rounded-md bg-purple-50">
        <h2 className="font-extrabold capitalize text-blue-800">{article.title}</h2>
        <a href={article.link}>
          <FiExternalLink />
        </a>
        <p>Source: {article.source}</p>
        <p>Published: {article.pubDate}</p>
      </section>
    </>
      )
}