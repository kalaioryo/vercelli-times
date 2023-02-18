import React from 'react';

import PropTypes from 'prop-types';

import { useSelector } from "react-redux";

import style from './categoriesNews.module.css'

const CategoriesNews = ({section, subSection, category}) => {
  const articles = useSelector((state) => state.allArticles.articles);
  let arrayOfTitle = []
  let arrayOfUrlImage = []
  let arrayOfUrlArticle = []

  const CategoryImage = ({slot}) => {
    return(
      <figure>
        <a href={arrayOfUrlArticle[slot]}>
          <img 
            alt={arrayOfTitle[slot]} 
            src={arrayOfUrlImage[slot]}>
          </img>
        </a>
      </figure>
    )
  }

  const CategoryElement = ({slot}) => {

    return(
      <a href={arrayOfUrlArticle[slot]}>
        <h2>{arrayOfTitle[slot]}</h2>
      </a>
    )
  }

  const RenderCategoryNews = articles
    .filter((article) => section ? article.section === section : true)
    .filter((article) => subSection ? article.subsection === subSection : true)
    .map((article) => { 
      const {title, multimedia, url} = article;
      
      arrayOfTitle.push(title)
      arrayOfUrlArticle.push(url)      
      if (multimedia) arrayOfUrlImage.push(multimedia[2].url)

      return {arrayOfTitle, arrayOfUrlArticle, arrayOfUrlImage}
    })

    if(arrayOfTitle[0]){

      return(
        <div className={style.newsCategory}>
          <h4>{category}</h4>
          <CategoryImage slot={0}/>

          {arrayOfTitle[0] && <CategoryElement slot={0} />}
          {arrayOfTitle[1] && <CategoryElement slot={1} />}
          {arrayOfTitle[2] && <CategoryElement slot={2} />} 

        </div>
    )
  }

  CategoriesNews.propTypes = {
    section: PropTypes.string,
    subSection: PropTypes.string,
    category: PropTypes.string,
  }

  return RenderCategoryNews
}

export default CategoriesNews