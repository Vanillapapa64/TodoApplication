import { useNavigate } from "react-router-dom"

interface user{
    username:string
}

export default function Appbar(inputs:user){
    const navigate=useNavigate()
    return(
        <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-xl drop-shadow-xl h-32 justify-between pr-10 h-20">
            <div className="w-12">
            </div>
            <div className="flex">
            <div className="pt-12 pl-14 text-6xl font-serif ">
                Todo App
            </div>
            <div >
            <button className="border-2 mt-16 ml-6 w-28 h-10 rounded-lg bg-green-600" onClick={()=>navigate('/newtodo')}>
                New Todo
            </button>
            </div>
            </div>
            <div className="w-12 pr-12 pt-16 text-3xl">
                {inputs.username.split('')[0]}
            </div>
        </div>
    )
}