import Mes from "./Mes"
import useGetMessage from "../../hooks/useGetMessage.js"
import { useEffect, useRef } from "react";
import UseListenMessages from "../../hooks/UseListenMessages.js";


function Message() {
  const {message ,Loading } = useGetMessage();  
  UseListenMessages();
  const lastMessage = useRef();

  useEffect(() => {
    setTimeout(()=>{
      lastMessage.current?.scrollIntoView({behavior : "smooth"})
    },50)
  }, [message])
  
  
  return (
    <div className="px-4 overflow-auto flex-1 ">
      {!Loading && message.length > 0 && (message.message || message).map(
        (message) => <div key={message._id}  ref={lastMessage}>
          <Mes  message={message}  />
          </div>
      )}
       {!Loading && message.length === 0 && (<p className="text-center text-xs p-2">Send a Message To Start Conversation </p>)}
    </div>
  )
}

export default Message