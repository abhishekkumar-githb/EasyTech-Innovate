import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-16 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;