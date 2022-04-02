import { useEffect, useState} from "react";
import axios from 'axios';
import { setQueryArticles } from '../redux/actions/articleAction';
import { useDispatch} from 'react-redux';
const useFetchApiQuery = (url) => {
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
      dispatch(setQueryArticles(response.data.response.docs));
      console.log(response.data.response.docs);
      setIsLoading(false);
    }

    fecthArticle()
  },[url])

  return {isLoading, hasError, errorMessage}
}

export default useFetchApiQuery;