import { BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/Authcontext"

import RegisterPage from "./pages/register"
import LoginPage from "./pages/login"
import Home from "./pages/home"


function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Inicio</h1>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App