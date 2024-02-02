import React from 'react';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Posts from './component/Posts';
import Comments from './component/Comments';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Todos from './component/Todos';
import Users from './component/Users';
import "./App.css"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
