import React from 'react';
import style from './errorComponent.module.css'

const ErrorComponent = ({message}) => {
  console.log(message);
  return (
    <div>Error Component: message is {message}</div>
  )
}

export default ErrorComponent