import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup=()=>{
    const navigate=useNavigate();
    const [email,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("")
    return(
        <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center ">
            <div className="border-2 rounded-xl border-stone-700 w-96 h-3/4 self-center bg-white/25 ">
                <div className="text-center text-7xl pt-8">Signup</div>
                <div className="grid grid-cols-1 gap-8 p-10 pt-16">
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setusername(e.target.value)
                    }} placeholder="Email"></input>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setfirstname(e.target.value)
                    }} placeholder="Firstname"></input>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setlastname(e.target.value)
                    }} placeholder="Lastname"></input>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setpassword(e.target.value)
                    }} placeholder="Password"></input>
                    <button className="w-32 h-14  border-2 text-white place-self-center rounded-3xl hover:bg-black" onClick={async()=>{
                        const response= await axios.post('http://localhost:3000/api/v1/user/signup',{
                            email,
                            firstname,
                            lastname,
                            password
                        })
                        
                        navigate('/signin')
                    }}> Submit</button>
                </div>
            </div>
        </div>
    )
}
