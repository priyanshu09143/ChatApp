import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Message from "./Message"
import MessageInput from "./MessageInput"
function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null)
    }
  }, [setSelectedConversation])

  return (
    <>
      <div className="bg-slate-500 px-4 py-2 mb-2 rounded-lg text-sm ">
        <span className="lable-text "> to : </span>{" "}
        <span className="font-semibold uppercase tracking-widest">{selectedConversation.name}</span>
      </div>
      <Message />
      <MessageInput />
    </>
  )
}

export default MessageContainer