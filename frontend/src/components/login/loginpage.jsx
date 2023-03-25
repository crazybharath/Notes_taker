import React from "react";


const Login = () => {
    return (
        <div>
            <section>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <span>Remember Me</span>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </section>
        </div>
    )
}
export default Login;