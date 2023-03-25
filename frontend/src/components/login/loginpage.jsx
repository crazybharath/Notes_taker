import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ("./login.css")

const Login = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [data,setdata]=useState([]);
    const [err,seterr]=useState(true);
    const navigate=useNavigate()
    const clickHandle=()=>{
        navigate("/signup")
    }
    useEffect(() => {
        fetch("http://localhost:8000/alluser").then(res => res.json())
            .then((data) => {
                
                setdata(data?.result)
            })
    }, [])
    const HandleClick=()=>{
        for(let i=0;i<data.length;i++){
            if(data[i].email === email && data[i].password === password){
                seterr(true)
                navigate("/homepage")
            }else{
                seterr(false)
            }
        }
    }
    return (
        <div>
            <section className="container1">
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" onChange={(e)=>{setemail(e.target.value)}} style={{width:"300px",height:"30px"}} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>{setpassword(e.target.value)}} style={{width:"300px",height:"30px"}}/>
                </div>
                <div>
                    <button onClick={HandleClick} className="btn11">Submit</button>
                    {!err?<div style={{color:"red"}}>your not have account pls register</div>:null}
                </div>
                <div><button onClick={clickHandle} className="btn10">Click To Register</button></div>
            </section>
        </div>
    )
}
export default Login;