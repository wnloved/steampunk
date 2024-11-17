import background from './background.gif'
import strelka from './strelka.png'
import pc from './pc.png'
import './Contacts.css'
function Video(){
    return (
    <div className='Video'>
        <img className='background' src = {background}></img>
        <button className='InstallButton'><img src={pc}></img>Загрузить на ПК</button>
        <div className='scrollbot'>
        <img className='scrollbotone' src={strelka}></img>
        <img className='scrollbottwo' src={strelka}></img>
        <img className='scrollbotthree' src={strelka}></img>
        </div>
    </div>
    )
  }
  export default Video;