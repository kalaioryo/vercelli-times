import axios from "axios";


export const dayNight = () => {
  return {
    type: 'DAYNIGTH'
  };
} 

// export function fetchArticleDetails() {
//   return function(dispatch) {
//     const API_KEY = process.env.REACT_APP_API_KEY

//     return axios.get(`https://api.nytimes.com/svc/archive/v1/2022/1.json?api-key=${API_KEY}`)
//       .then(({ data }) => {
//       dispatch(setArticleDetails(data));
//     });
//   };
// }

// export const getData = () => (dispatch) =>{
//   const API_KEY = process.env.REACT_APP_API_KEY

//   let url = `https://api.nytimes.com/svc/archive/v1/2022/1.json?api-key=${API_KEY}`;

//   async function getDataApi(){
//     axios.get(url)
//     .then(res => {
//       console.log(res);
//     })

//     return dispatch({
//       type: 'GETDATA',
//     })
//   }
//   getDataApi()

// }
