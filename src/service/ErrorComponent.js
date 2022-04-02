import React from 'react'

const ErrorComponent = ({message}) => {
  console.log(message);
  return (
    <div>Error Component: message is {message}</div>
  )
}

export default ErrorComponent