import { useParams } from "react-router-dom";

const Show =()=>{

    const {showId} = useParams()


    return (
    <div>  Show Page for show {showId}</div>
)}

export default Show;