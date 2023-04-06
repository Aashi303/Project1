import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Randomjoke = () => {
    const[joke,setjoke]=useState("");
    useEffect(()=>
    {
        fetchjoke();
    })
    const fetchjoke=()=>
    {   
        axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((response)=>{
            const{setup,punchline}=response.data;
            setjoke(`${setup} ${punchline}`);
        })
        .catch((error)=>
        {
            console.log(error);
        });
        
    };
  return (
    
    <div>
        <h1>Random Joke Generator</h1>
        <button onClick={()=>fetchjoke()}>Add Joke</button>
        <p>{joke}</p>
    </div>
  )
}

export default Randomjoke