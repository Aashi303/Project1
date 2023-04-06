import React, { useState } from 'react'

const FormValidation2 = () => {
    const[email,setemail]=useState("");
    const[password,setpass]=useState("");
    const[firstName,setfirst]=useState("");
    const[lastName,setlast]=useState("");
    const[address,setadd]=useState("");

    const handleemaailchange=(e)=>
    {
        setemail(e.target.value);
    }
    const handlepasschange=(e)=>
    {
        setpass(e.target.value);
    }
    const handlefirst=(e)=>
    {
        setfirst(e.target.value);
    }
    const handlelast=(e)=>
    {
        setlast(e.target.value);
    }
    const handleaddress=(e)=>
    {
        setadd(e.target.value);
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
            localStorage.setItem("username",firstName);
            localStorage.setItem("lastname",lastName);
            localStorage.setItem("email",email);
            localStorage.setItem("password",password);
            localStorage.setItem("Address",address);
            window.location.pathname="/Home";
        }
    };
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <label>First Name:<input value={firstName} onChange={handlefirst} required/></label><br/>
        <label>Last Name:<input value={lastName} onChange={handlelast} required/></label><br/>
        <label>Email:<input value={email} onChange={handleemaailchange}/></label><br/>
        <label>Password:<input value={password} onChange={handlepasschange}/></label><br/>
        <label>Address:<textarea value={address} rows="20" cols="20" onChange={handleaddress}></textarea></label><br/>
        <button type="submit">Submit</button> <br/>
        </form>
    </div>
  )
}

export default FormValidation2