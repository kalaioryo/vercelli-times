import React from 'react';

import PropTypes from 'prop-types';

import { useSelector } from "react-redux";

import style from './categoriesNews.module.css'

const CategoriesNews = ({section, subSection, category}) => {
  const articles = useSelector((state) => state.allArticles.articles);
  let arrayOfTitle = []
  let arrayOfUrlImage = []
  let arrayOfUrlArticle = []

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
          <figure>
            <a href={arrayOfUrlArticle[0]}>
              <img 
                alt={arrayOfTitle[0]} 
                src={arrayOfUrlImage[0]}>
              </img>
            </a>
          </figure>

          {arrayOfTitle[0] && (
              <a href={arrayOfUrlArticle[0]}>
                <h2>{arrayOfTitle[0]}</h2>
              </a>
          )}

          {arrayOfTitle[1] && (
              <a href={arrayOfUrlArticle[1]}>
                <h2>{arrayOfTitle[1]}</h2>
              </a>
          )}

          {arrayOfTitle[2] && (
              <a href={arrayOfUrlArticle[2]}>
                <h2>{arrayOfTitle[2]}</h2>
              </a>
          )}          
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