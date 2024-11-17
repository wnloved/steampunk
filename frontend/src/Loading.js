import ReactLoading from "react-loading";
function Loading(){
    return(
        <div className="Loading">
            <ReactLoading type="balls" color="#A64941"
            height={200} width={200} />
        </div>
    )
}
export default Loading