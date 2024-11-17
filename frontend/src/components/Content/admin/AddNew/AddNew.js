import { useEffect, useState } from 'react'
import './AddNew.css'
import deletebutton from './delete.png'
import editbutton from './edit.png'
function AdminRouter(){
    const [mode,setMode] = useState('default')
    const [spisok, setSpisok] = useState([])
    const [redact, setRedact] = useState([null, 'disabled'])
    async function hendleDeleteNew(id) {
        const url = 'http://localhost:8000/deletenew'
        var data = {
            id:id,
        }
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)}
        )
        var data = await res.json() 
        if (data.succsess == 'succsess'){
        setMode('default')
        setRedact([null, 'disabled'])}
        FetchSpisok()
    }
    async function handleEditNew() {
        const url = 'http://localhost:8000/editnew'
        var data = {
            id:redact[0],
            name:document.getElementById('name').value,
            discription:document.getElementById('discription').value,
            url:document.getElementById('url').value
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)}
        )
        var data = await res.json() 
        if (data.succsess == 'succsess'){
        setMode('default')
        setRedact([null, 'disabled'])}
        FetchSpisok()
    }
    async function handleAddNew() {
        const url = 'http://localhost:8000/appendnew'
        var data = {
            name:document.getElementById('name').value,
            discription:document.getElementById('discription').value,
            url:document.getElementById('url').value
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)}
        )
        var data = await res.json() 
        if (data.succsess == 'succsess'){
        setMode('default')
        FetchSpisok()}
    }
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
    function NewFunc(){
    if (mode=='default'){
        setMode('add')}
        else{
            setMode('default')
        }
    }
    function EditFunk(){
    if (mode=='default'){
        setMode('edit')}
        else{
            setMode('default')
            setRedact([null, 'disabled'])
        }
    }
    function hendleRedact(id){
        setRedact([id,'active'])
    }
    return(
    <div className='addNew'>
        {mode==='default'?(
        <>
        <div className='HeaderPanel'>Здравствуйте, администратор</div>
        <button className='submitadmin' onClick={EditFunk}>Удалить или редактировать</button>
        <button className='submitadmin' onClick={NewFunc}>Добавить новость</button>
        </>
    ):mode==='edit' ? (redact[1]=='active'?(
        <>
            <div className='HeaderPanel'><button className='backbutton' onClick={EditFunk}>back</button><div className='AdminHeader'>Редактировать новость</div></div>
            <input id= 'name' placeholder='Введите название' type='text' className='nameInput' defaultValue={spisok[redact[0]-1].name}></input>
            <textarea id = 'discription' placeholder='Введите описание' className='discInput' defaultValue={spisok[redact[0]-1].discription}></textarea>
            <input id= 'url' placeholder='Введите url(eng)' type='text' className='nameInput' defaultValue={spisok[redact[0]-1].url}></input>
            <button className='submitadmin' onClick={handleEditNew}>Сохранить изменения</button>
        </>
    ):(
        <>
        <div className='HeaderPanel'><button className='backbutton' onClick={EditFunk}>back</button><div className='AdminHeader'>Редактировать или удалить</div></div>
        <ul className='Spisok'>{spisok.map((item) => (
            <li key={item.id}><div className='newname'>{item.name}</div><div className='editordelete'><img className='editbutton' src={editbutton} onClick={()=>{hendleRedact(item.id)}}></img><img className='deletebutton' src={deletebutton} onClick={()=>{hendleDeleteNew(item.id)}}></img></div>
            </li>))}</ul>
        </>)
    ): mode==='add' ? (
        <>
        <div className='HeaderPanel'><button className='backbutton' onClick={EditFunk}>back</button><div className='AdminHeader'>Добавить новость</div></div>
        <input id= 'name' placeholder='Введите название' type='text' className='nameInput'></input>
        <textarea id = 'discription' placeholder='Введите описание' className='discInput'></textarea>
        <input id= 'url' placeholder='Введите url(eng)' type='text' className='nameInput'></input>
        <button className='submitadmin' onClick={handleAddNew}>Загрузить новость</button>
        </>):(<></>)}
    </div>)
}
export default AdminRouter