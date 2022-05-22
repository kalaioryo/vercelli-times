import React from 'react';
import style from './dateComponent.module.css'

function DateComponent() {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let date = new Date();
  let month = months[date.getMonth()];
  let day = days[date.getDay()];
  let numberDay = date.getDate();
  let year = date.getFullYear();


  return (
    <span>{day}, {month} {numberDay}, {year} </span>
  );
}

export default DateComponent;
