import { Link } from "react-router-dom";

const ShowCard =({name, image, id, summary})=>{
    
    const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
    
    return (
        <div>
           <div>
           
            <img src={image} alt={name} />

           </div>
            <h1>{name}</h1>

            <p>{summaryAsText}</p>

            
      <div>
        <Link to={`/data/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>



        </div>
    )
}
export default ShowCard