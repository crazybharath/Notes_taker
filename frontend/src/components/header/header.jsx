import React from "react";
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate=useNavigate();
    const HandleClick=()=>{
        navigate("/addnotes")
    }
    const ClickHandle=()=>{
        navigate("/homepage")
    }
    return(
        <div>
            <section>
                <span onClick={ClickHandle}>Home</span>
                <button onClick={HandleClick}>Addnote</button>
                <button>DeleteAll</button>
                <button>Export</button>
            </section>
        </div>
    )
}
export default Header;