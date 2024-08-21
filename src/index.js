import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Anexos from './pages/anexos/anexos';
import ErrorPage from './pages/errorPage/errorPage';
import Home from './pages/home/home';
import OnePost from './pages/post/OnePost';
import Search from './pages/search/search';
import SearchBook from './pages/searchBook/searchBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/livros" element={<Anexos/>}/>
          <Route path="/posts/search" element={<Search/>}/>
          <Route path="/livros/search" element={<SearchBook/>}/>
          <Route path="/post" element={<OnePost/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
