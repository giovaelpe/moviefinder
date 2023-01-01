import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import searchReducer from './Searchbar/Searchslice';
import { configureStore } from '@reduxjs/toolkit';
import resultSlice from './Searchresults/Resultslice';
import movieSlice from './Moviepage/movieSlice';
import ListSlice from './Movielist/ListSlice';
import userslice from './Features/userslice';

const container = document.getElementById('root');
const root = createRoot(container);

const store = configureStore({
  reducer: {
    search: searchReducer,
    searchResult: resultSlice,
    movie: movieSlice,
    list: ListSlice,
    user : userslice
  }
})
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
