import { useEffect, useState} from "react";
import axios from 'axios';
import { setQueryArticles } from '../redux/actions/articleAction';
import { useDispatch} from 'react-redux';

const useFetchApiQuery = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const fecthArticle = async () =>{
    setIsLoading(true);
    setHasError(false);
    setErrorMessage('');

    try{
      const response = await axios.get(url)
      if (!response.status === 200) {
        throw new Error("Something went wrong!");
      }
      if (response.data.results === null) {
        throw new Error("Results not found");
      }

      dispatch(setQueryArticles(response.data.response.docs));
      
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  
  }

  useEffect(()=>{
    fecthArticle()
  },[url])

  return {isLoading, hasError, errorMessage}
}

export default useFetchApiQuery;