import React, { useState } from "react";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";


const AddNotes=()=>{
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const navigate=useNavigate()
    const UploadPost=async()=>{
        const formdata=new FormData();
        formdata.append("title",title);
        formdata.append("description",description);
        await fetch("http://localhost:8000/notes",{
            method:"POST",
            body:formdata
        })
    }

    const HandleClick=()=>{
        if(title.length>1 && description.length>1){
            UploadPost();
            navigate("/homepage")
        }

    }
    return(
        <div>
            <section>
                <Header/>
            </section>
            <section>
                <div>
                    <h3>Title</h3>
                    <input type="text" name="title" id="title" onChange={(e)=>{settitle(e.target.value)}} />
                </div>
                <div>
                    <h3>Description</h3>
                    <input type="text" name="description" id="description"onChange={(e)=>{setdescription(e.target.value)}}/>
                </div>
                <div>
                    <button onClick={HandleClick}>Add Notes</button>
                </div>
            </section>
        </div>
    )
}
 export default AddNotes