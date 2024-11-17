import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Loading from './Loading';
import './App.css'

function App(){
  const [Load,setLoad]=useState(false)
useEffect(()=>{
  setTimeout(()=>{setLoad(true)},1000)
})
if (Load==true){
  return (
  <div>
      <Header/>
      <Content/>
      <Footer/>
  </div>
  )
}else{
  return(
  <div>
    <Loading/>
  </div>)
}}
export default App;
