import React, {useEffect, useState} from "react";
import useFetchArticle from "../service/fetchApiArticle";
import { useParams } from "react-router-dom";

import style from './sectionPage.module.css';

import SectionPageContainer from "../components/SectionPageContainer";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";

const API_KEY = process.env.REACT_APP_API_KEY

const SectionPage = () =>{

  let { section, subSection } = useParams();

  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  const {isLoading, hasError, errorMessage} = useFetchArticle(url);
  console.log(url);

  if(hasError) return <ErrorComponent message={errorMessage} />

  if (isLoading) return <LoadingComponent/>

  return (
    <div className={style.pageContainer}>
      <p>SectionPage for</p>
      <p>{section}</p>
      { subSection ? <p>SubSection {subSection}</p> : null }
      <SectionPageContainer section={section} subSection={subSection}/>
    </div>   
  )
}

export default SectionPage;
