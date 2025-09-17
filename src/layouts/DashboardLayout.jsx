import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import ScrollToTop from "../components/ScrollToTop";

const DashboardLayout = () => {
    return (
        <div className="flex bg-primary-bg dark:bg-dark h-screen overflow-hidden">
            <ScrollToTop />
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardHeader />
                <main className="h-screen overflow-auto pb-10 md:pb-0">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;