import React from 'react';

export default function Article(props) {
  console.log(props.article)
  return (
    <>
      <h3>{props.article.title}</h3>
      <a href={props.article.link}>Check it out!</a>
      <p>Source: {props.article.source}</p>
      <p>Published: {props.article.pubDate}</p>
    </>
  )
}