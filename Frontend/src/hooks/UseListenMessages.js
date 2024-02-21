import useConversation from "../zustand/useConversation"
import {useSocketContext} from "../context/Socket.context"
import { useEffect } from "react";
const UseListenMessages = () => {

    const { socket }  = useSocketContext();

    const {message , setMessage} =  useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            setMessage([...message,newMessage])
        })

        return ()=> socket.off("newMessage")
    },[socket , setMessage , message])
}

export default UseListenMessages