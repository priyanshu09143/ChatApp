import useConversation from "../zustand/useConversation"

// eslint-disable-next-line react/prop-types
const Sidechats = ({ name, profile, lastIDX, id, conversation }) => {


  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === id
  return (
    <>    <div
      className={`container flex gap-4 items-center p-2 px-4 w-auto mb-1 hover:bg-slate-200 hover:transition-all rounded-xl hover:text-black cursor-pointer font-semibold ${isSelected ? "bg-slate-200 text-black" : ""}`}
      onClick={ () => setSelectedConversation(conversation)}>
      <div className="img avatar ">
        <div className="w-11 h-11 rounded-full">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="text-sm">
        <p>{name}</p>
      </div>
    </div>
      {!lastIDX && <div className="divider m-0"></div>}

    </>

  )
}

export default Sidechats