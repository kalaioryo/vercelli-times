import React from 'react';
import {Link} from 'react-router-dom';



function DailyNewspaper() {

  return (
    <Link to='/section/todayspaper'>
      <span>Daily news</span>
    </Link>
  );
}

export default DailyNewspaper;
