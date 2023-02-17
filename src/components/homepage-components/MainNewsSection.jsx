import React from 'react'

import RenderArticles from '../articles-components/RenderArticles';

import style from '../../pages/home.module.css'

function MainNews() {
return (
<>
  <div className={style.mainNews}>
  <section className={style.container}>
    <RenderArticles slot={0} typeArticle={'article'} />
    <RenderArticles slot={1} typeArticle={'abstract'}/>
    <div className={style.borderHorizontal}></div>
    <RenderArticles slot={2} typeArticle={'abstract'}/>
    <div className={style.borderHorizontal}></div>
    <RenderArticles slot={3} typeArticle={'abstract'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={0} typeArticle={'figcaption'}/>
  </section>
  
  <section className={style.container}>
    <RenderArticles slot={4} typeArticle={'abstract'}/>
    <div className={style.borderHorizontal}></div>
    <RenderArticles slot={5} typeArticle={'abstract'}/>
    <div className={style.borderHorizontal}></div>
    <RenderArticles slot={6} typeArticle={'abstract'}/>
    <div className={style.borderHorizontal}></div>
    <RenderArticles slot={7} typeArticle={'abstract'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={4} typeArticle={'figcaption'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={8} typeArticle={'article'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={8} typeArticle={'figcaption'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={9} typeArticle={'article'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={9} typeArticle={'figcaption'}/>
  </section>
  
  <section className={style.covidSection}>
    {/* <div>Covid Section</div> */}
  </section>
          
  <section className={style.container}>
    <RenderArticles slot={10} typeArticle={'article'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={10} typeArticle={'figcaption'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={11} typeArticle={'article'}/>
  </section>

  <section className={style.container}>
    <RenderArticles slot={11} typeArticle={'figcaption'}/>
  </section>
</div>

<div className={style.borderVertical} ></div>
</>
)
}

export default MainNews