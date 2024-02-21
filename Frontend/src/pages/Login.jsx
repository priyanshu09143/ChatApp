import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin"
const Login = () => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const {loading , login} = useLogin();

    const loginHandler = async(e)=>{
        e.preventDefault();
        await login(email , password)
    } 
    return (

        <form onSubmit={loginHandler}>
        <div className="container flex flex-col items-center justify-center text-2xl h-screen min-w-96 max-w-2xl m-auto">
            <div className="min-h-96 w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
                <div className="login p-3  items-center">
                    <h2 className="text-center font-semibold">Login Here</h2>
                </div>
                <div className="box flex flex-col justify-center  items-center my-4">
                    <input type="email" placeholder="Email Here" value={email} onChange={(e)=> setEmail(e.target.value)} className=" my-2 mt-4 min-w-80 max-w-96 input input-bordered" />
                    <input type="password" placeholder="Password Here" value={password} onChange={(e)=> setPassword(e.target.value)} className="input min-w-80 max-w-96  input-bordered " />

                    <button type="submit " className="btn btn-neutral my-3 mt-6 " disabled={loading}> Submit Now</button>
                    <div className="dont flex justify-end text-sm text-gray-300 mt-4">
                        <Link to={"/register"} >Don&apos;t have an account ..?</Link>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Login