import React, { useState } from "react";
import Header from "../header/header";
import { useEffect } from "react";


const Homepage=()=>{
    const [post,setpost]=useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/alldata").then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setpost(data?.result)
            })
    }, [])

    return(
        <div>
            <section>
                <Header/>
            </section>
            <section>
                <input type="search" name="search" id="search" />
                <button>Search</button>
            </section>
            <section>

            </section>
        </div>
    )
}
export default Homepage;