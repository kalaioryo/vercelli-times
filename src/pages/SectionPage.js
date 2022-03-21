import React, {useEffect, useState} from "react";
import useFetchArticle from "../service/fetchApi";
import { useParams } from "react-router-dom";
import SectionPageContainer from "../containers/navbar/SectionPageContainer";
import LoadingComponent from "../components/LoadingComponent";

const API_KEY = process.env.REACT_APP_API_KEY

const SectionPage = () =>{
  // let [isLoading, setIsLoading] = useState(false)

  // useEffect =(section)=>{
  //   let { section } = useParams();
  // }

  let { section } = useParams();

  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  const {isLoading} = useFetchArticle(url);
  console.log(url);
  if (isLoading) return <LoadingComponent/>
  // console.log(isLoading);
  return (
    <>
      <p>SectionPage for</p>
      <p>{section}</p>
      <SectionPageContainer section={section}/>
    </>   
  )
}

export default SectionPage;
