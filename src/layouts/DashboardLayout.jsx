import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex bg-primary-bg dark:bg-dark h-screen overflow-y-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardHeader />
                <main className="h-screen overflow-y-scroll">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;