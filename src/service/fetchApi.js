import { useEffect, useState} from "react";
import axios from 'axios';
import { setArticles } from '../redux/actions/articleAction';
import { useDispatch} from 'react-redux';

const useFetchArticle = (url) => {
  const  [isLoading, setIsLoading] = useState(false);
  // const articles = useSelector((state) => state.allArticles);
  const dispatch = useDispatch();

  useEffect(()=>{
    const fecthArticle = async () =>{
    setIsLoading(true);
    const response = await axios.get(url)
    .catch((err) => {
      console.log("Err", err);
    });
    // console.log(response.data);
    dispatch(setArticles(response.data.results));
    setIsLoading(false);
    return {isLoading}
    }

    fecthArticle()
    return {isLoading};

  },[url])


  // const fecthArticle = async () =>{
  //   setIsLoading(true);
  //   const response = await axios.get(url)
  //   .catch((err) => {
  //     console.log("Err", err);
  //   });
  //   // console.log(response.data);
  //   dispatch(setArticles(response.data.results));
  //   setIsLoading(false);
    
  // }

  // useEffect(()=>{
  //   fecthArticle()
  // }, [url])
  // console.log(isLoading);
  return {isLoading}
}

export default useFetchArticle;