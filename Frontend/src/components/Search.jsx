import { useState } from "react"
import { IoSend } from "react-icons/io5"
import useConversation from "../zustand/useConversation"
import useGetConversation from "../hooks/useGetConversation"
import toast from "react-hot-toast"
const Search = () => {

  const [search , setSearch] = useState("")
  const {setSelectedConversation} = useConversation();
  const {conversation} = useGetConversation();

  const submitHandler = (e)=>{
    e.preventDefault();
    if(!search) return ;
    if(search.length < 3){
      return toast.error("Search term must be at least 3 character long")
    }
    
    const convers = conversation.filterUser.find((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    console.log(convers)
    if(convers){
      setSelectedConversation(convers);
      setSearch("");
    }else toast.error("No such User Found")
  }

  return (
    <form onSubmit={submitHandler}>
    <div className="flex gap-2">
    <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} className="input input-bordered" placeholder="Search" />
    <button type="submit"><IoSend/></button>
</div>
</form>

  )
}

export default Search