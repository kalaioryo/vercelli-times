import React from 'react'

import RenderArticles from '../articles-components/RenderArticles';

import style from '../../pages/home.module.css'

function MoreNews2() {
  return (
    <>
      <h1>More news 2</h1>
        <div className={style.mainMoreNews}>
          <div>
            <RenderArticles slot={13} typeArticle={'figcaption'}/>
            <RenderArticles slot={13} typeArticle={'article'}/>
          </div>
          <div>
            <RenderArticles typeArticle={'article'} restNews={'more-news-2'}/>
          </div>
        </div>
    </>
  )
}

export default MoreNews2