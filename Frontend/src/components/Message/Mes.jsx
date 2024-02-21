/* eslint-disable react/prop-types */
import { extratTime } from "../../utils/extratTime";
import { useAuthContext } from "../../context/Auth.context"
import useConversation from "../../zustand/useConversation";

function Mes({ message }) {
  const { authUser } = useAuthContext();
  const UpdatedDate = extratTime(message.createdAt)
  const  {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser.user._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profile = fromMe ? authUser.user.profile : selectedConversation?.profile
  const BgColor = fromMe ? "bg-blue-500" : ""
 

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${BgColor} text-sm`}>{message.message} </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{UpdatedDate}</div>
    </div>
  )
}

export default Mes