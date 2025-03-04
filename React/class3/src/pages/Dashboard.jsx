import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    let navigate = useNavigate();
  return (
    <div>
        <h1>User Dashboard</h1>
        <nav>
            <Link to="/dashboard/profile">Profile</Link> |
            <Link to="/dashboard/settings">Settings</Link> |
            <button onClick={() => navigate("/login")}>Logout</button>
        </nav>
        <Outlet />
    </div>
  )
}
export default Dashboard