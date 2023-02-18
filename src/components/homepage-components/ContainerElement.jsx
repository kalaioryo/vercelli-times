import React from 'react';

import PropTypes from 'prop-types'

import { useSelector } from "react-redux";

import RenderArticles from '../articles-components/RenderArticles';

import style from './containerElement.module.css'
import scrollbar from '../../style/scrollbarCustom.module.css'

function ContainerElement({section}) {
  const articles = useSelector((state) => state.allArticles.articles);
  const categories  = articles.filter((article) => section ? article.section === section : true)
  const category = categories[0]?.section

  return (
    <>
      { 
        category &&
        <>
          <h3 className={style.nameCategory} >{category}</h3>
          <div className={`${style.category} ${scrollbar.scrollbarStyle}` }>
          <RenderArticles typeArticle={'article'} section={category} image={true}/>
          </div>
        </>
      }
    </>
  )
}

ContainerElement.propTypes = {
  section: PropTypes.string
}

export default ContainerElement