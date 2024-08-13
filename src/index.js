import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import Anexos from './pages/anexos/anexos';
import Search from './pages/search/search';
import './index.css';
import OnePost from './pages/post/OnePost';
import Book from './pages/book/OneBook';
import SearchBook from './pages/searchBook/searchBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/anexos" element={<Anexos/>}/>
          <Route path="/posts/search" element={<Search/>}/>
          <Route path="/livros/searchBook" element={<SearchBook/>}/>
          <Route path="/post" element={<OnePost/>}/>
          <Route path="/book" element={<Book/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
