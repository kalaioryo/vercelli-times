import React from 'react';

function DataComponent() {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let date = new Date();
  let month = months[date.getMonth()];
  let day = days[date.getDay()];
  let numberDay = date.getDate();
  let year = date.getFullYear();


  return (
    <p>{day}, {month} {numberDay}, {year} </p>
  );
}

export default DataComponent;
