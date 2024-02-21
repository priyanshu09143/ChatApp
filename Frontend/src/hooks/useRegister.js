import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Auth.context";

function useRegister() {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const register = async ({ name, email, password, gender }) => {
        const success = handleInputError({ name, email, password, gender })

        if (!success) return;


        setLoading(true)
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, gender }),
            })

            const data = await res.json();
        
            if (!data.success) {
                throw new Error(data.message)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return { loading, register }
}

export default useRegister

function handleInputError({ name, email, password, gender }) {
    if (!name || !email || !password || !gender) {
        toast.error("Please Fill All Fields")
        return false
    }
    if (password.length < 6) {
        toast.error("password Must be at least 6 character")
        return false
    }

    return true
}