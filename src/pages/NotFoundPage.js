import React from 'react'

import { Link } from 'react-router-dom'

import style from './notFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>Not Found Page</p>
      <button className={style.btn}>
        <Link to={'/'}>click here for go to homepage</Link>      
      </button>
    </div>
  )
}

export default NotFoundPage