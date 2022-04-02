import { useEffect, useState} from "react";
import axios from 'axios';
import { setArticles } from '../redux/actions/articleAction';
import { useDispatch} from 'react-redux';

const useFetchArticle = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const articles = useSelector((state) => state.allArticles);
  const dispatch = useDispatch();

  useEffect(()=>{
    const fecthArticle = async () =>{
      setIsLoading(true);
      setHasError(false);
      setErrorMessage('');
    
      const response = await axios.get(url)
      .catch(error => {
        setHasError(true);
        setErrorMessage(error.message);
        console.log("Err", error);
      });
    // console.log(response.data);
      dispatch(setArticles(response.data.results));
      // console.log(response);
      setIsLoading(false);
    }

    fecthArticle()
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
  return {isLoading, hasError, errorMessage}
}

export default useFetchArticle;