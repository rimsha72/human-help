import { Outlet } from "react-router-dom";
import Sidebar from "./partials/sidebar";
// import Header from "./partials/header";

export default function RootLayout() {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-64">
        <Outlet />
      </div>
    </div>
  )
}
