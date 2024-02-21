import { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
  const {sendMessage, Loading} = useSendMessage()
  const [message, setMessage] = useState("")
  const submitHandle = async(e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className="px-4 my-3" onSubmit={ submitHandle}>
      <div className="w-full relative">
        <input value={message} onChange={e => setMessage(e.target.value)} type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" placeholder="Send Message" />

        <button className="absolute inset-y-0 end-0 flex items-center pe-3" type="submit" disabled={Loading}><IoSend /></button>
      </div>

    </form>
  );
}

export default MessageInput