import React from "react";
import { useNavigate } from "react-router-dom";
import("./header.css")
const Header = () => {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate("/addnotes")
    }
    const ClickHandle = () => {
        navigate("/homepage")
    }

    const delClick = () => {
        fetch("http://localhost:8000/delall", {
            method: "DELETE",
        })

        navigate("/homepage")
    }
    return (
        <div>
            <section className="container3">
                <button onClick={ClickHandle} className="btn1">Home</button>
                <button onClick={HandleClick} className="btn2">Addnote</button>
                <button className="btn3" onClick={delClick}>DeleteAll</button>
                <button className="btn4">Export</button>
            </section>
        </div>
    )
}
export default Header;