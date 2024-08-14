import { useEffect, useState } from "react"
import { rerenderatom } from "../store/atoms";
import axios from "axios"
import { useRecoilState,useSetRecoilState } from "recoil";
type Todo = {
    id: number;
    title: string;
    description:string
};
export const CompletedTodos=()=>{
    const [todos,settodos]=useState<Todo[]>([])
    const[rerender,setrerender]=useRecoilState(rerenderatom)
    
    useEffect(()=>{
        const fetchtodos=async()=>{
            try{
                
                const response= await axios.get<Todo[]>("http://localhost:3000/api/v1/todo/completedtodos",{
                    headers:{
                        Authorization: "Bearer "+ localStorage.getItem("token")
                    }
                })
                settodos(response.data)
                
                console.log(response.data)
            }catch(err){
                console.log(err)
            }
        } 
        fetchtodos()
    },[rerender])
    return(
        <div className="grid gap-4 border-2 border-orange-300 rounded-xl p-6 bg-gradient-to-r from-purple-500 to-pink-500 w-80">
            <p className="pb-2 text-4xl">Completed</p>
            {todos.map(todo=>(
                <div key={todo.id}>
                    <Todoitem todo={todo} settodos={settodos}/>
                    
                </div>
            ))}
        </div>
    )
}
interface Todoitemprop {
    todo:Todo;
    settodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todoitem: React.FC<Todoitemprop>=({todo})=>{
    
    return (
        <div className=" pt-2 ">
            
            <div className="text-lg"> Title: {todo.title}</div>
            <div >Description: {todo.description}</div>
            
        </div>
    )
}
export const IncompleteTodos=()=>{
    const [todos,settodos]=useState<Todo[]>([])
    const[rerender,setrerender]=useRecoilState(rerenderatom)
    
    useEffect(()=>{
        const fetchtodos=async()=>{
            try{
                
                const response= await axios.get<Todo[]>("http://localhost:3000/api/v1/todo/incompletedtodos",{
                    headers:{
                        Authorization: "Bearer "+ localStorage.getItem("token")
                    }
                })
                settodos(response.data)
                
                console.log(response.data)
            }catch(err){
                console.log(err)
            }
        } 
        fetchtodos()
    },[rerender])
    return(
        <div className="grid gap-4 border-2 border-orange-300 rounded-xl p-6 bg-gradient-to-r from-purple-500 to-pink-500 w-96 ">
            <p className="pb-2 text-4xl">Incomplete</p>
            {todos.map(todo=>(
                <div key={todo.id}>
                    <IncompleteTodoitem todo={todo} settodos={settodos}/>
                    
                </div>
            ))}
        </div>
    )
}
const IncompleteTodoitem: React.FC<Todoitemprop>=({todo,settodos})=>{
    const setrerender=useSetRecoilState(rerenderatom)
    async function buttonhandler(id:number){
        
        const response=await axios.put("http://localhost:3000/api/v1/todo/complete?id="+id)
        try{
            if(response.status>=200&&response.status<3000){
                const response= await axios.get<Todo[]>("http://localhost:3000/api/v1/todo/incompletedtodos",{
                        headers:{
                            Authorization: "Bearer "+ localStorage.getItem("token")
                        }
                    })
                    settodos(response.data)
                    setrerender(" ")
            }
        }catch(err){
            console.log(err)
        }
        
    
    }
    return (
        <div className=" pt-2 flex grid grid-cols-5">
            <div className="pr-2  col-span-3" >
                <div className="text-lg"> Title: {todo.title}</div>
                <div >Description: {todo.description}</div>
            </div>
            
            <button  type="button" className="border-2 border-orange-300 rounded-3xl p-2 bg-violet-400 hover:bg-teal-200 col-span-2" onClick={()=>buttonhandler(todo.id)}>complete</button>
        </div>
    )
}
