import React from 'react'

import { Link } from 'react-router-dom'

import style from './notFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>Not Found Page</p>
      <Link to={'/'}>click here for go to homepage</Link>      
    </div>
  )
}

export default NotFoundPage