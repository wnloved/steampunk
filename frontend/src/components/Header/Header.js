import React, { useState } from 'react';
import './Header.css'
var state = Array(4).fill(true)
function onChange(state){
  url = ''
  for (let a = 21; a<window.location.href.length; a++){
    var url = url+ window.location.href[a]
  }
  switch (url){
    case '/':
      state[0] = false;
      break
    case '/characters':
      state[1] = false;
      break
    case '/download':
      state[2] = false;
      break
    case '/about':
      state[3] = false;
      break
}}
onChange(state)
function Header(){
  const [clicked, setClicked] = useState(state)
  return (
  <div className='Header'>
    <div className='logo'>SteamHoliness</div>
    <a className={clicked[0] ? 'headerbutton ' :'headerbutton active'} href='/' id='menu' >Главная</a>
    <a className={clicked[1] ? 'headerbutton' :'headerbutton active'} href='/characters'>Персонажи</a>
    <a className={clicked[2] ? 'headerbutton' :'headerbutton active'} href='/download'>Скачать</a>
    <a className={clicked[3] ? 'headerbutton' :'headerbutton active'} href='/about'>О нас</a>
  </div>
  )
}
export default Header;
