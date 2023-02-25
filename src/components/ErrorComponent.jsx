import React from 'react';

import { MdErrorOutline } from 'react-icons/md'
import { GiNewspaper } from 'react-icons/gi'

import style from './errorComponent.module.css'

const ErrorComponent = ({message}) => {

  const NetworkError = () => {
    return(
      <div className={style.container}>
        <div className={style.errorIcon}><MdErrorOutline size={'30px'}/></div>
        <p className={style.message}>Check your network connection</p>
      </div>
    )
  }

  const ResultError = () => {
    return(
      <div className={style.container}>
        <div className={style.errorIcon}><MdErrorOutline size={'30px'}/></div>
        <p className={style.message}>{message}</p>
        <div className={style.newsPaperIcon}><GiNewspaper size={'30px'}/></div>
      </div>
    )
  }

  const OtherError = () => {
    return(
      <div className={style.container}>
        <div className={style.errorIcon}><MdErrorOutline size={'30px'}/></div>
        <p className={style.message}>Sorry {message}</p>
      </div>
    )
  }

  if(message === 'Network Error')
  return <NetworkError/>

  if (message === 'Results not found')
  return <ResultError/>

  else return <OtherError/>
}

export default ErrorComponent