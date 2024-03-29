import {React} from 'react';

import moment from 'moment';

import style from './articlePage.module.css';

const ArticlePage = () => {

  let article = JSON.parse(localStorage.singleArticle);
  const {headline, multimedia, lead_paragraph, abstract, pub_date, section_name, web_url} = article;

  let date = moment(pub_date).format('LLL');

  const Image = ({multimedia}) =>{
    const urlBase = "https://www.nytimes.com/";
    const defaultImg = "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png";
    return (
      <>
        <img src={`${multimedia[0] ? urlBase + multimedia[0].url : defaultImg}`}
          alt={headline.main}
          width='90%' 
          height='90%'>
        </img>
      </>
    )
  }

  return (
    <article className={style.article}>
      <h1 className={style.headline}>{headline.main}</h1>
      <section className={style.metaData}>
        <span>{section_name}</span>
        <span>{date}</span>
      </section>
      <Image multimedia={multimedia}/> 
      <p className={style.lead} >{lead_paragraph}</p>
      <p className={style.abstract}>{abstract}</p>
      <button className={style.btn}>
        <a href={`${web_url}`} target='blank'>Read Full Article</a>
      </button>
    </article>
  )
}

export default ArticlePage