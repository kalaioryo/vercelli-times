import React from 'react'
import { useSelector } from 'react-redux';


function Abstract({slot}) {
  const articles = useSelector((state) => state.allArticles.articles);
  const renderAbstarct = articles.map((article)=>{
    const {title,abstract, url} = article;

  return (
    <section key={title}>
      <a href={`${url}`}>
        <p>{abstract}</p>
      </a>
    </section>
    
  )
})

return(
  <>{renderAbstarct[slot]}</>
)}

export default Abstract;