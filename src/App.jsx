import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
// import { Home2 } from "./pages/Home"
import './App.css'
import { Dashboard } from "./pages/Dashboard"
import { DashboardTable } from "./pages/Dashboards/DashboardTable"
import { DashboardUsers } from "./pages/Dashboards/DashboardUsers"
import Settings from "./pages/Settings/Settings"
// import { Register2 } from "./pages/Register"
// import { Login2 } from "./pages/Login"

export default function App() {
  return (
    <Routes>
      <Route>
        {/* Public route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<DashboardTable />} />
        <Route path="/usertable" element={<DashboardUsers />} />
        <Route path="/settings" element={<Settings />} />
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
