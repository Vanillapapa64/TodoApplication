import { useState } from "react"
import axios from "axios"


import { useNavigate } from "react-router-dom";
export const Newtodo=()=>{
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const navigate=useNavigate()
    return(
        <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center ">
            <div className="border-2 rounded-xl border-stone-700 w-96 h-2/4 self-center bg-white/25 ">
                <div className="text-center text-6xl pt-8">Create a Todo</div>
                <div className="grid grid-cols-1 gap-8 p-10 pt-16">
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        settitle(e.target.value)
                    }} placeholder="Title"></input>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setdescription(e.target.value)
                    }} placeholder="Description"></input>
                    <button className="w-44 h-14  border-2 text-white place-self-center rounded-3xl hover:bg-black" onClick={async()=>{
                        const response= await axios.post('http://localhost:3000/api/v1/todo/newtodo',{
                            title,
                            description
                        },{headers:{Authorization:"Bearer " + localStorage.getItem('token')}})
                        
                        navigate('/todo')
                    }}> Create New todo</button>
                </div>
            </div>
        </div>
    )
}