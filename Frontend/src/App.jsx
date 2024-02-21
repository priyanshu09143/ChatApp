import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/Auth.context";
export const App = () => {
  const {authUser} = useAuthContext();
  return (
    <>

        <Routes>
          <Route path="/" element={authUser ? <Home/> :<Navigate to={"/register"}/> } />
          <Route path="/login" element={ authUser ? <Navigate to="/"/> : <Login/>} />
          <Route path="/register" element={ authUser  ? <Navigate to="/"/> : <Register/> } />
        </Routes>
      <Toaster/>
    </>
  );
};

export default App;
