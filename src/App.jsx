import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route>
        {/* Public route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<h1>Not found</h1>} />

        {/* Private routes */}
        <Route element={<h1>Template</h1>}> 
          <Route path='/admin-users' element={<h1>Adios</h1>} />
        </Route>
      </Route>
    </Routes>
  )
}
