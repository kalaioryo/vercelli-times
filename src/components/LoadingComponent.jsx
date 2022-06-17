import React from 'react';

import style from './loadingComponent.module.css'

const LoadingComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    )
}

export default LoadingComponent