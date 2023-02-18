import React from 'react'

import RenderArticles from '../articles-components/RenderArticles';

import style from './sideNewsSection.module.css'

function SideNews() {
  return (
    <>
      <div className={style.sideNews}>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'opinion'}/>
        <div className={style.borderHorizontal}></div>
        <h3>Opinion</h3>
        <RenderArticles typeArticle={'title'} section={'opinion'}/>
        <div className={style.borderHorizontal}></div>
        <RenderArticles typeArticle={'article'} restNews={'side-more-news'}/>
      </div>
    </>
  )
}

export default SideNews