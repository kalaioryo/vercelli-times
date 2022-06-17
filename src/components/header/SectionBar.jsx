import React from 'react';
import { Link } from 'react-router-dom';

import style from './sectionBar.module.css'

import { sectionbarData } from './sectionbarData';

function SectionBar() {
  

  const renderLinkSection = sectionbarData.map(sections=>{
    const {id, name, queryUrl} = sections;
    return(
      <li key={`tag:${id}`}>
      <Link to={`/section/${queryUrl}`}><span>{name}</span></Link>
      </li> 
    )
  })

  return (
    <div className={style.containerTag}>
      <ul className={style.tag}>
        {renderLinkSection}
      </ul>
    </div>
  );
}

export default SectionBar;
