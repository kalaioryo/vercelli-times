import React from "react";

import useFetchArticle from "../service/fetchApiArticle";

import { useParams } from "react-router-dom";

import SectionPageContainer from "../components/SectionPageContainer";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../components/ErrorComponent";

import style from './sectionPage.module.css';

const API_KEY = process.env.REACT_APP_API_KEY

const SectionPage = () =>{

  let { section, subSection } = useParams();

  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  const {isLoading, hasError, errorMessage} = useFetchArticle(url);

  if(hasError) return <ErrorComponent message={errorMessage} />

  if (isLoading) return <LoadingComponent/>

  function camelCase(str){
    return str.split(' ')
      .map(a => a.trim())
      .map(a => a[0].toUpperCase() + a.slice(1))
      .join("")
  }

  const SectionPageNews = ()=>{
    if(section === 'us' ) return section ='U.S.';
    if(section === 'nyregion' ) return section ='New York';

    return (
      <h1 className={style.title}>{camelCase(section)} News</h1>
    )
  }

  const SubSectionPageNews = ()=>{
    if(section === 'us' ) return section ='U.S.';
    if(section === 'nyregion' ) return section ='New York';
    return (
      <>
        <h5 className={style.section}>{section.toUpperCase()}</h5>
        <h1 className={style.title}>{camelCase(subSection)} News</h1>
      </>
      
    )
  }

  return (
    <div className={style.pageContainer}>
      {subSection ? <SubSectionPageNews/> : <SectionPageNews/>}
      <SectionPageContainer section={section} subSection={subSection}/>
    </div>
  )
}

export default SectionPage;
