import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp=()=>{
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("")
    const [confirmpassword,setconfirmpassword]=useState("");
    const [err,seterr]=useState(true)
    const navigate=useNavigate();

    const Uploaduser= async()=>{
        const formdata=new FormData();
        formdata.append("email",email);
        formdata.append("password",password);
        await fetch("http://localhost:8000/signup",{
            method:"POST",
            body:formdata
        })
    }
const HandleClick=()=>{
    if(password === confirmpassword){
        Uploaduser();
        navigate("/");
    }else{
        seterr(false)
    }
}

    return(
        <div>
            <section>
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e)=>{setemail(e.target.value)}} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e)=>{setpassword(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="confirmpassword">Repeat password</label>
                    <input type="password" name="confirmpassword" id="confirmpassword" onChange={(e)=>{setconfirmpassword(e.target.value)}} />
                </div>
                {!err?<div style={{color:"red"}}>password is not matched</div>:null}
                <div>
                    <span>Terms & condition</span>
                </div>
                <div>
                    <button onClick={HandleClick}>Continue</button>
                </div>
            </section>
        </div>
    )
}
 export default SignUp;