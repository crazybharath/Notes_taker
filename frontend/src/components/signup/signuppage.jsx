import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import("./signup.css")


const SignUp = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("");
    const [err, seterr] = useState(true)
    const navigate = useNavigate();


    const HandleClick = () => {
        if (password === confirmpassword) {
            const formdata = new FormData();
            formdata.append("email", email)
            formdata.append("password", password)
            fetch("http://localhost:8000/signup", {
                method: "POST",
                body: formdata
            })
            navigate("/");
        } else {
            seterr(false)
        }
    }

    return (
        <div>
            <section className="container">
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => { setemail(e.target.value) }} style={{ width: "300px", height: "30px" }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => { setpassword(e.target.value) }} style={{ width: "300px", height: "30px" }} />
                </div>
                <div>
                    <label htmlFor="confirmpassword">Repeat password</label>
                    <input type="password" name="confirmpassword" id="confirmpassword" onChange={(e) => { setconfirmpassword(e.target.value) }} style={{ width: "300px", height: "30px" }} />
                </div>
                {!err ? <div style={{ color: "red" }}>password is not matched</div> : null}
                <div>
                    <span>Terms & condition</span>
                </div>
                <div>
                    <button onClick={HandleClick} className="btn14">Continue</button>
                </div>
            </section>
        </div>
    )
}
export default SignUp;