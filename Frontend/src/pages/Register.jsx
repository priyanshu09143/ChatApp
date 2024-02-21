import { useState } from "react"
import { Link } from "react-router-dom"
import useRegister from "../hooks/useRegister"

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")


    const { loading, register } = useRegister();
    const SubmitHandler = async (e) => {
        e.preventDefault();
        const input = { name, email, password, gender }
        await register(input)
    }

    return (

        <div className="container flex flex-col items-center justify-center text-2xl h-screen min-w-96 max-w-2xl m-auto">
            <div className="min-h-96 w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
                <div className="login p-3  items-center">
                    <h2 className="text-center font-semibold">Register Now </h2>
                </div>
                <div >
                    <form onSubmit={SubmitHandler} className="box flex flex-col justify-center  items-center my-4">
                        <input type="text" placeholder="Name" className=" mt-2 min-w-80 max-w-96 input input-bordered" value={name} onChange={e => setName(e.target.value)} />
                        <input type="email" placeholder="Email Here" className=" my-2 mt-2 min-w-80 max-w-96 input input-bordered" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password Here" className="input min-w-80 max-w-96  input-bordered " value={password} onChange={e => setPassword(e.target.value)} />
                        <div className=" flex flex-row justify-start items-start my-4">
                            <label htmlFor="male" className="text-sm text-gray-300">Male</label>
                            <input type="radio" name="gender" id="male" className="mx-3 radio " onChange={() => setGender("male")} />
                            <label htmlFor="female" className="text-sm text-gray-300">Female</label>
                            <input type="radio" name="gender" id="female" className="mx-3 radio " onChange={() => setGender("female")} />
                        </div>
                        <button type="submit " className="btn btn-neutral my-3 " disabled={loading}> Submit Now</button>
                    </form>
                    <div className="dont flex justify-end text-sm text-gray-300 mt-5">
                        <Link to={"/login"}>Already an Account..!</Link>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Register