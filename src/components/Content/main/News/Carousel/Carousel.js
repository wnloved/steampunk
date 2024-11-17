import { useState } from 'react'
import './Carousel.css'
import strelka1 from './strelka.png'
import strelka2 from './strelka2.png'
import carousel1 from './carousel1.jpg' 
import carousel2 from './carousel2.jpg' 
import carousel3 from './carousel3.jpg' 
import carousel4 from './carousel4.jpg' 
function Carousel(){
    var carousel = Array(4).fill(false)
    carousel[0] = true
    var[num, setNum] = useState(0)
    var[clicked, setClicked] = useState(carousel)
    function next1(){
        next2()
        animate()
    }
    function next2(){
        if (num == 3){
            num = 0
            setNum(num)
        }
        else{
            num = num+1
            setNum(num)
        }
    }
    function previous1(){
        previous2()
        animate()
    }
    function previous2(){
        if (num == 0){
            num = 3
            setNum(num)
        }
        else{
            num = num-1
            setNum(num)
        }
    }
    function animate(){
        carousel = []
        carousel = Array(4).fill(false)
        carousel[num] = true
        setClicked(carousel)
    }
    function carouseled(){
        next1()
        setTimeout(carouseled, 15000)
    }
    setTimeout(carouseled, 15000)
    return (
    <div className='NewsCarousel'>
        <button className='next'><img src={strelka1} onClick={next1}></img></button>
        <button className='previous'><img src={strelka2} onClick={previous1}></img></button>
        <img className={clicked[0] ? 'display':'nonedisplay'} src={carousel1}></img>
        <img className={clicked[1] ? 'display':'nonedisplay'} src={carousel2}></img>
        <img className={clicked[2] ? 'display':'nonedisplay'} src={carousel3}></img>
        <img className={clicked[3] ? 'display':'nonedisplay'} src={carousel4}></img>
    </div>
    )
  }
  export default Carousel;