import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddNotes from "./components/addnotes/addnotes";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/loginpage";
import SignUp from "./components/signup/signuppage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/addnotes" element={<AddNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App