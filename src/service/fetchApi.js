import { useEffect} from "react";
import axios from 'axios';
import { setArticles } from '../redux/actions/articleAction';
import { useDispatch} from 'react-redux';

const useFetchArticle = (url) => {
  // const articles = useSelector((state) => state.allArticles);

  const dispatch = useDispatch();

  const fecthArticle = async () =>{
    const response = await axios.get(url)
    .catch((err) => {
      console.log("Err", err);
    });
    // console.log(response.data);
    dispatch(setArticles(response.data.results));
  }

  useEffect(()=>{
    fecthArticle()
  }, [])
}

export default useFetchArticle;