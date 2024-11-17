import './Error.css'
function Error(){
    return(
    <div className="ErrorPage">
        <div className="ErrorSection">
            <div className="Error404">Error 404</div>
            <div className="pagenotf">Page not found!</div>
            <div className="grustno">К сожалению такой страницы не существует :(</div>
            <div className="backtomain">Вернитесь на главную<a href="/">На главную</a></div>
       </div>
    </div>)   
   }
   export default Error