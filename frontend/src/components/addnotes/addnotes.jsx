import React, { useState } from "react";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import "./addnotes.css"


const AddNotes = () => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [err, seterr] = useState(true)
    const navigate = useNavigate()

    const HandleClick = () => {
        if (title.length > 1 && description.length > 1) {
            const formdata = new FormData();
            formdata.append("title", title);
            formdata.append("description", description);
            fetch("http://localhost:8000/notes", {
                method: "POST",
                body: formdata
            })
            navigate("/homepage")
        } else {
            seterr(false)
        }

    }
    return (
        <div>
            <section>
                <Header />
            </section>
            <section className="container4">
                <div>
                    <h3>Title</h3>
                    <textarea type="text" name="title" id="title" onChange={(e) => { settitle(e.target.value)}}className="area"/>
                </div>
                <div>
                    <h3>Description</h3>
                    <textarea type="text" name="description" id="description" onChange={(e) => { setdescription(e.target.value) }} className="area" />
                </div>
                {!err?<div style={{color:"red"}}>Dont Avoid any thing</div>:null}
                <div>
                    <button onClick={HandleClick} className="btn5">Add Notes</button>
                </div>
            </section>
        </div>
    )
}
export default AddNotes