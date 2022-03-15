import React from 'react';
import { Link } from 'react-router-dom';


const sectionList = [
  {id: 1, name: 'World', queryUrl:'world'},
  {id: 2, name: 'U.S.', queryUrl:'us'},
  {id: 3, name: 'Politics', queryUrl:'politics'},
  {id: 4, name: 'N.Y.', queryUrl:'ny'},
  {id: 5, name: 'Business', queryUrl:'business'},
  {id: 6, name: 'Opinion', queryUrl:'opinion'},
  {id: 7, name: 'Tech', queryUrl:'tech'},
  {id: 8, name: 'Science', queryUrl:'science'},
  {id: 9, name: 'Health', queryUrl:'health'},
  {id: 10, name: 'Sports', queryUrl:'sports'},
  {id: 11, name: 'Arts', queryUrl:'arts'},
  {id: 12, name: 'Books', queryUrl:'books'},
  {id: 13, name: 'Style', queryUrl:'style'},
  {id: 14, name: 'Food', queryUrl:'food'},
  {id: 15, name: 'Travel', queryUrl:'travel'},
  {id: 16, name: 'Magazine', queryUrl:'magazine'},
  {id: 17, name: 'T Magazine', queryUrl:'t-magazine'},
  {id: 18, name: 'Real Estate', queryUrl:'real-estate'}

]

function HeaderDown() {
  

  const renderLinkSection = sectionList.map(sections=>{
    const {id, name, queryUrl} = sections;
    return(
      <li className='link-tag' key={`tag:${id}`}>
      <Link to={`/section/${queryUrl}`}><p>{name}</p></Link>

        {/* <a href={'#'} >{name}</a> */}
      </li>
  
    )
  })

  return (
    <div className='header-tag'>
      <ul className='tag'>
        {renderLinkSection}
      </ul>
    </div>
  );
}

export default HeaderDown;
