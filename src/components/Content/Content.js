import React, { useState, useEffect } from 'react';  
import Main from './main/Main';
import Download from './download/Download';
import Characters from './characters/Characters';
import About from './about/About';
import Error from './error/Error';
import Admin from './admin/Admin';
import './Content.css'
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
function Content(){
  const [spisok,setSpisok] = useState([])
  async function FetchSpisok() {
    const url = 'http://localhost:8000'
    const response = await fetch(url, {
        method: 'GET'
    });
    const data = await response.json();
    setSpisok(data.news || []);
    }
  useEffect(()=>{if (spisok.length==0) {
    FetchSpisok(); 
  }}, [spisok])
  const style = {
    fontFamily: 'main'
  }
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admin' element={<Admin/>}/>
        {spisok.map((item,index) => (
        <Route path={`/news/${item.url}`} element={
        <div key={index} className='NewPage'>
          <div className='NewPageSection'>
            <div className='NewHeaderPage'>{item.name}</div>
            <div className='NewBodyPage'><pre style={style}>{item.discription}</pre></div>
          </div>
          <div className='NewsPageSpisok'>
          <ul>{spisok.map((item, index) => (
            <li key={index}>
                <a href={`/news/${item.url}`}>{item.name}</a>
            </li>))}
          </ul>
          </div>
        </div>}/>))}
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}
export default Content;