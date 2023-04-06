import React, { useState } from 'react'

const FormValidation1 = () => {
    const[email,setemail]=useState("");
    const[password,setpass]=useState("");

    const handleemaailchange=(e)=>
    {
        setemail(e.target.value);
    }
    const handlepasschange=(e)=>
    {
        setpass(e.target.value);
    }
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        const emailregex=/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/;
        const passregex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(!emailregex.test(email))
        {
            alert("Email not valid");
        }
        else if(!passregex.test(password))
        {
            alert("Password should be of 8 characters lengrth");
        }
        else{
            alert("form Submitted!!!");
            setemail("");
            setpass("");
        }
    };
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <input value={email} onChange={handleemaailchange}/>
        <input value={password} onChange={handlepasschange}/>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default FormValidation1