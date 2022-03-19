import React from "react";
import useFetchArticle from "../service/fetchApi";
import RenderArticles from "./RenderArticles";
import { useParams } from "react-router-dom";
import SectionPageContainer from "./header/SectionPageContainer";

const API_KEY = process.env.REACT_APP_API_KEY

const SectionPage = () =>{

  let { section } = useParams();

  const nameSection = 'world';
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  useFetchArticle(url);
  console.log(url);

  return (
    <>
      <p>SectionPage for</p>
      <p>{section}</p>
      <SectionPageContainer section={section}/>
      
      {/* <RenderArticles typeArticle={'article'}/> */}
    </>
    
  )
}

export default SectionPage;
