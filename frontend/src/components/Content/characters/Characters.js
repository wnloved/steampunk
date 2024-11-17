import './Characters.css'
import charPolice from './policeChar.jpg'
import charGirl from './girlChar.jpg'
import { useState } from 'react'
function Characters(){
    const [char1, setChar1] = useState("character1")
    const [char2, setChar2] = useState("character2")
    function setActive1(){
        if (char1 == "character1"){
            setChar1("actived character1")
        }else{
            setChar1("character1")
        }
    }
    function setActive2(){
        if (char2 == "character2"){
            setChar2("actived character2")
        }else{
            setChar2("character2")
        }
    }
    return(
    <div className="characters">
        <div className={char1}><div className='charimg1' onMouseOver={setActive1} onMouseOut={setActive1}></div><div className='char1disc'><div className='chardiscHeader'>Знакомьтесь, Детектив Оливер</div><div className='chardiscBody'><b>Рост:</b> примерно 190см.<br/>Хорошо сложен, но без излишек.<br/><b>Персона:</b> Один из лучших детективов в городе, несколько горделив, но тут по делу.<br/><b>Сокровище:</b> дорожит своей карьерой и младшей сестрой(Люси), что является его лучиком солнца в этом грязном мире пара.<br/><b>Цель:</b> до встречи с тёмной стороной церкви его всегда передергивало, когда он проходил мимо священников, слишком идеальными они были - это всегда настораживало и пугало главного героя. Целью является раскрыть тайну церкви, которую священники так упорно скрывают.<br/><b>Недостаток:</b> Большая неосведомленность о мире в котором он живёт.
 </div></div></div>
        <div className={char2}><div className='char2disc'><div className='chardiscHeader'>Знакомьтесь, Грейс</div><div className='chardiscBody'><b>Рост:</b> Ровные 174см.<br/>Худая, на первый взгляд невыдающаяся, но с сильной волей. Волосы разбросаны до плеч, кудряшки.<br/><b>Персона:</b> Неоднозначная личность, при первом разговоре можно подумать, что она добропорядочный гражданин, однако при более тесном контакте можно узнать, что она ненавидит церковь и всё с ней связано, ведь из-за неё умерла вся её семья(Они были жертвами) и она знает о жертвоприношении, ведь она владеет магией Наблюдателя, поэтому не может ничего сделать одна, ей нужен партнёр.<br/><b>Сокровище:</b> Кулон с фотографией семьи.<br/><b>Цель:</b> Отомстить за своих близких.<br/><b>Недостаток:</b> Невозможно действовать в одиночку.
        </div></div><div className='charimg2' onMouseOver={setActive2} onMouseOut={setActive2}></div></div>
    </div>)
}
export default Characters