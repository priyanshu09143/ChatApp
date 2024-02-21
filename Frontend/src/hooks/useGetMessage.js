import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast";

function useGetMessage() {
    const [Loading, setLoading] = useState(false)
    const { message, setMessage, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/message/${selectedConversation?._id}`);
                const data = await res.json();
                if (!data) throw new Error(data.error)
                setMessage(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) {
            getMessage();
        }

    }, [selectedConversation?._id, setMessage])

    return { message, Loading , selectedConversation }
}

export default useGetMessage