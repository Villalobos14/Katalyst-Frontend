import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard'
import DashboardTable from '../pages/Dashboards/DashboardTable'
import DashboardUsers from '../pages/Dashboards/DashboardUsers'
import Profile from '../pages/Dashboards/Profile'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/dashboard/table' element={<DashboardTable />} />
                <Route path="/dashboard/users" element={<DashboardUsers />} />
                <Route path="/dashboard/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}