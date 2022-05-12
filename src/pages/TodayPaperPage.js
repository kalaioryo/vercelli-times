import React,{useEffect,useState} from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const url = `https://api.nytimes.com/svc/topstories/v2/todayspaper.json?api-key=${API_KEY}`;

const TodayPaperPage = () => {
  const [newsPaper, setNewsPaper] = useState([])

  useEffect(() =>{
    fetchTodayPaper()
  },[])

  const fetchTodayPaper = async () =>{
    const response = await axios.get(url)
    // console.log(response.data);
    const data = await response.data.result;
    setNewsPaper(data)
  }

  const Element = () =>{
    return <p>Articolo presente</p>
  }

  const NoElement = () =>{
    return <p>Articolo non presente</p>
  }

  

  return (
    <div>
      <p>TodayPaperPage</p>
      
      {newsPaper? <Element/> : <NoElement/>}
    </div>
  )
}

export default TodayPaperPage