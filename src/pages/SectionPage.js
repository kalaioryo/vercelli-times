import React, {useEffect, useState} from "react";
import useFetchArticle from "../service/fetchApiArticle";
import { useParams } from "react-router-dom";
import SectionPageContainer from "../containers/navbar/SectionPageContainer";
import LoadingComponent from "../components/LoadingComponent";
import ErrorComponent from "../service/ErrorComponent";

const API_KEY = process.env.REACT_APP_API_KEY

const SectionPage = () =>{

  let { section, subSection } = useParams();

  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  const {isLoading, hasError, errorMessage} = useFetchArticle(url);
  console.log(url);

  if(hasError) return <ErrorComponent message={errorMessage} />

  if (isLoading) return <LoadingComponent/>

  return (
    <>
      <p>SectionPage for</p>
      <p>{section}</p>
      { subSection ? <p>SubSection {subSection}</p> : null }
      <SectionPageContainer section={section} subSection={subSection}/>
    </>   
  )
}

export default SectionPage;
