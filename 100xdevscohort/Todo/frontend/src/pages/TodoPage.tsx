import { CompletedTodos } from "../components/Todo";
import { IncompleteTodos } from "../components/Todo";
import Appbar from "../components/Appbar";
import { RecoilRoot, useRecoilValue } from "recoil";
import { usernamestate } from "../store/atoms";
export const TodoPage=()=>{
    const username:string=useRecoilValue(usernamestate)
    return(
        <RecoilRoot>
        <div className="w-screen h-screen bg-sky-400">
                <Appbar username={username}/>
                <div className="grid pt-20 gap-4 place-content-center md:flex justify-center grid gap-8">
                    <IncompleteTodos />
                    <CompletedTodos />
                </div>
        </div>
        </RecoilRoot>
    )
}