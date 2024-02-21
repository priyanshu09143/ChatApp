import Sidebar from "../components/Sidebar"

const Home = () => {
  return (

    <div>
      <div className="container flex flex-col items-center justify-center text-2xl min-w-96 max-w-4xl m-auto max-h-[90vh] mt-6">
        <div className="min-h-96 w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
         
         <Sidebar/>
        
        </div>
      </div>
    </div>
  )
}

export default Home

