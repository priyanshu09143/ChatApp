import { useEffect } from "react";
import { useState } from "react"
import toast from "react-hot-toast";

function useGetConversation() {
    const [Loading , setLoading] = useState(false)
    const [conversation , setConversation] = useState([]);

    useEffect(() => {
 const getConversation = async()=>{
    setLoading(true)
    try {
       
        const res = await fetch("/api/user");
       
        const data = await res.json();
        if(!data.success){
            throw new Error(data.message)
        }
        setConversation(data);
        setLoading(false)
        
    } catch (error) {
        toast.error(error.message)
        
    }finally{
        setLoading(false)
    }
}
getConversation();
}, [])  
return {Loading , conversation}
}

export default useGetConversation