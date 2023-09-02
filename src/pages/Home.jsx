import { useState } from "react";


const Home =()=>{

   const [inputValue, setInputValue] = useState('')
    
    console.log(inputValue);

    const onInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    return <div>
        <div>{inputValue}</div>
        <button 
             type="button" onClick={()=>{
                setInputValue("Abdul Rahman");

        }}>
            Update to rendom
        </button>
        <input type="text" value={inputValue} onChange={onInputChange}/>
    </div>
}

export default Home;