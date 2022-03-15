import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useSelector } from 'react-redux';
import store from "../src/redux/store"
import {BrowserRouter} from "react-router-dom";

// let store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const moonSun = useSelector(state => state.dayNigth);


ReactDOM.render(
  
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>       
        <App/>
      </BrowserRouter> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
