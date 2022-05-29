import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/App.css';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import store from "../src/redux/store"
import {BrowserRouter} from "react-router-dom";

// const mode = useSelector( state => state.darkMode);


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
