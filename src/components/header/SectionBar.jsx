import React from 'react';

import { Link } from 'react-router-dom';

import { sectionBarData } from './sectionBarData';

import style from './sectionBar.module.css'

function SectionBar() {

  const renderLinkSection = sectionBarData.map(sections=>{
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