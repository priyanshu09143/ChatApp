
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/Auth.context.jsx'
import { SocketContextProvider } from './context/Socket.context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContextProvider>
            <SocketContextProvider>
                <App />
            </SocketContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
)
