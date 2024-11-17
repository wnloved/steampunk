import './Download.css'
function Download(){
    return(
        <div className="DownloadPage">
            <div className='downloadinfoblock'>
            <div className='title'>Визуальная новелла SteamHoliness</div>
            <div className='system'>
                <div>
                <div className='systemInfo'>
                    <div className='systemHeader'>
                    <b>О продукте:</b></div>
                    <div><b>Жанр:</b> Стимпанк</div>
                    <div><b>Главные герои:</b> 2</div>
                    <div><b>Количество глав:</b> 1</div>
                    <div><b>Язык:</b> Русский</div>
                </div>
                </div>
                <div className='systemInfo'>
                    <div className='systemHeader'>
                    <b>Системные требования:</b></div>
                    <div><b>OC:</b> Windows 7+</div>
                    <div><b>Процессор:</b> Core 2 duo</div>
                    <div><b>Оперативная память:</b> 2 GB ОЗУ</div>
                    <div><b>Видеокарта:</b> Geforce gtx 560</div>
                </div>
            </div>
            <div className='ButtonSection'><a className="DownloadButton">Скачать</a></div>
            </div>
        </div>
    )
}
export default Download