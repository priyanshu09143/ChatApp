import MessageContainer from "./Message/MessageContainer";
import Search from "./Search"
import Sidechats from "./Sidechats"
import { IoExitOutline } from "react-icons/io5";
import useLogout from "../hooks/useLogout.js"
import useGetConversation from "../hooks/useGetConversation.js"
import useConversation from "../zustand/useConversation.js"
import { useAuthContext } from "../context/Auth.context.jsx";
const Sidebar = () => {
  const { Loading, conversation } = useGetConversation();
  const { selectedConversation } = useConversation();
  
  const { logout } = useLogout()
  const { filterUser } = conversation
  return (
    <>
      <div className="flex justify-between w-full ">
        <div className="p-4 min-w-60 max-w-72 h-[90vh] w-full  relative">
          <div className="sticky top-0 left-0 z-10 ">
            <Search />
          </div>
          <div className=" h-[83%] overflow-auto pt-2 mt-2 mb-7">
            {Loading ? (
              <div>Loading please wait</div>
            ) : (
              filterUser && filterUser.length > 0 && filterUser.map((e, index) => (
                <Sidechats
                  key={e._id}
                  id ={e._id}
                  name={e.name}
                  profile={e.profile}
                  lastIDX={index === filterUser.length - 1}
                  conversation = {e}
                />
              ))
            )}

            { }
          </div>


          <div className="absolute bottom-0">
            <button type="submit" onClick={logout}><IoExitOutline /></button>
          </div>
        </div>
        <div className="flex flex-col justify-end w-full p-3 h-[90vh] border-l">
          {
            selectedConversation ? <MessageContainer />:  <NoChatSelected />
          }


        </div>
      </div>
    </>
  )
}

export default Sidebar

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <p className="font-semibold text-xl my-2">Hello {authUser.user.name}</p>
      <p className="font-semibold text-xl">For Chet Select A Chat </p>
    </div>
  )
}