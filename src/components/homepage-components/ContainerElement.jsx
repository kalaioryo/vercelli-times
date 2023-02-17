import React from 'react';

import { useSelector } from "react-redux";

import RenderArticles from '../articles-components/RenderArticles';

// import style from '../../pages/home.module.css'
import style from './containerElement.module.css'
import scrollbar from '../../style/scrollbarCustom.module.css'

function ContainerElement({section}) {
  const articles = useSelector((state) => state.allArticles.articles);
  const categories  = articles.filter((article) => section ? article.section === section : true)
  const category = categories[0]?.section
  console.log(category);

  return (
    <>
      { 
        category &&
        <>
          <h3>{category}</h3>
          <div className={`${style.category} ${scrollbar.scrollbarStyle}` }>
          <RenderArticles typeArticle={'article'} section={category} image={true}/>
          </div>
        </>
      }
    </>
  )
}

export default ContainerElement