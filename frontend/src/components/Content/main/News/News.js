import './News.css'
import Carousel from './Carousel/Carousel';
import React, { useEffect, useState } from 'react'; 
function News(){
    const [News,setNews]= useState([])
    const [sucсsess, setSucсsess] = useState(false)
    var url = 'http://localhost:8000'
    async function FetchData() {
            const response = await fetch(url, {
                method: 'GET'
            });
            const data = await response.json();
            setNews(data.news || []);
            setSucсsess(true);
            }
    useEffect(()=>{FetchData()}, [])
    return (
    <div className="Newssection">
        <h1>Новости</h1>
        <div className='Newsblock'>
            <Carousel/>
            <div className="News">
                <ul id='NewsSpisok'> <div className="NewsHeader"><a href="">Свежее</a><div className='headerborder'></div></div>
                    {sucсsess && News.length > 0? (
                            News.map((item, index) => (
                                <li key={index}>
                                    <a href={`/news/${item.url}`}>{item.name}</a>
                                </li>
                            ))
                        ) : (
                            <li>Загрузка...</li>)}
                </ul>
            </div>
        </div>
    </div>
    )
  }
  export default News;