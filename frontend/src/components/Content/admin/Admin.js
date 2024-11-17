import { useEffect, useState } from 'react'
import './Admin.css'
import AdminRouter from './AddNew/AddNew'
function Admin(){
    const [verified, setVerified] = useState(false)
    async function verification() {
        var login =  document.getElementById('login')
        var password =  document.getElementById('password')
        var data = {
            login:login.value,
            password:password.value
        }
        const url = 'http://localhost:8000/verify'
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)}
        )
        var data2= await res.json()
        if (data2.verify == 'verify'){
            setVerified(true)
        }
    }
    return(
    <div className="admin_panel">
        {verified?(<AdminRouter/>):(
        <div className="verify">
                <div className='Autorization'>Авторизация</div>
                <input id="login" className="login" type="text" placeholder="Ведите ваш логин администратора"></input>
                <input id ="password" className="password" type="password" placeholder="Ведите ваш пароль администратора"></input>
                <button className='submit' onClick={verification}>Войти</button>
        </div>)}
    </div>
    )
}
export default Admin