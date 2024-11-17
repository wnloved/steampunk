import './Footer.css'
import telegram from './telegram.png'
import ds from './discord.png'
function Footer() {
    return(
        <div className="Footer">
            <a className='telega' href='https://t.me/wnloved'><img src={telegram} ></img></a>
            <a className='discord'><img src={ds}></img></a>
        </div>
    )
}
export default Footer