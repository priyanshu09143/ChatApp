import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"

function useSendMessage() {
    const [Loading, setLoading] = useState(false)
    const { message, setMessage, selectedConversation } = useConversation();

    const sendMessage = async (newMessage) => {
        setLoading(true)
        try {
            console.log(selectedConversation)
            const res = await fetch(`/api/message/send/${selectedConversation?._id}`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: newMessage })
            })
            console.log(res)
            const data = await res.json()
            console.log(data)
            if (!data) throw new Error(data.message)
            await setMessage([...message, data])

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { sendMessage, Loading }

}

export default useSendMessage