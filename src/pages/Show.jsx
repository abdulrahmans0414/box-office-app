import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";

const useShowById = (showId)=>{
 
    const [showData, setShowData] = useState(null);
    const [showError, setShowError] = useState(null);
    

    useEffect( ()=>{
        
        async function fetchData() {

            try {
                const data = await getShowById(showId)
                setShowData(data);
            } catch (error) {
                setShowError(error)
            }
       
    }
fetchData()

},[showId])

return {showData, showError}

}

const Show =()=>{

    const {showId} = useParams()
const {showData, showError} = useShowById(showId)

if(showError){
    return <div>Error:{showError.message}</div>
}
if(showData){
    return <div>Got show data:{showData.name}</div>
}
    return (
    <div> Data is loading {showId}</div>
)}

export default Show;