import React from 'react';
import Article from './Article';
import { Link } from 'react-router-dom';
import { BrowserRouter  } from 'react-router-dom';

const ArticleListing = () =>{
  return (
    <div>
      {/* <h2>Article</h2> */}
      <Link to={`/article`}><h2><Article/></h2></Link>
      
    </div>
  )
}

export default ArticleListing;