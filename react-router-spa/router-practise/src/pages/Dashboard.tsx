import { NavLink, Outlet } from "react-router-dom";

const Dashboard=()=> {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
        <NavLink to="orders">Orders</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;