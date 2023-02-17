import React from 'react'

import RenderArticles from '../articles-components/RenderArticles';

// import style from '../../pages/home.module.css'
import style from './moreNewsSection.module.css'

function MoreNews1() {
  return (
    <>
      <h1>More news</h1>
      <div className={style.moreNews}>
        <div>
          <RenderArticles slot={12} typeArticle={'figcaption'}/>
          <RenderArticles slot={12} typeArticle={'article'}/>
        </div>
        <div>
          <RenderArticles typeArticle={'article'} restNews={'more-news-1'}/>
        </div>
      </div>
    </>
  )
}

export default MoreNews1