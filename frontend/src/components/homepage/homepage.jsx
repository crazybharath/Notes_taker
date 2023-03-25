import React, { useState } from "react";
import Header from "../header/header";
import { useEffect } from "react";
import "./home.css"


const Homepage = () => {
    const [post, setpost] = useState([]);
    // const[delid,setdelid]=useState("")

    useEffect(() => {
        fetch("http://localhost:8000/alldata").then(res => res.json())
            .then((data) => {

                setpost(data?.result)
            })
    }, [])

    return (
        <div>
            <section>
                <Header />
            </section>
            <section>
                <input type="search" name="search" id="search" className="search"/>
                <button className="btn7">Search</button>
            </section>
            <section className="container6">
                <section >
                    {
                        post?.map?.((post, index) => {
                            // console.log(post);
                            return (
                                <div key={index} className="container7">
                                    <h1>Title:  {post?.title}</h1>
                                    <p>Description: {post?.description}</p>
                                    <button className="btn8">Edit</button>
                                    <button className="btn9">delete</button>
                                </div>
                            )

                        })
                    }
                </section>
            </section>
        </div>
    )
}
export default Homepage;