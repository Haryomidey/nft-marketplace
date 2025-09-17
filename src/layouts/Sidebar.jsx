import { Link, NavLink, useNavigate } from "react-router-dom";
import {
    Squares2X2Icon,
    LockClosedIcon,
    HeartIcon,
    StarIcon,
    UserIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
    const navigate = useNavigate();

    const linkClass = ({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 text-xs transition-colors ${
            isActive ? "text-custom-red" : "text-gray-500 hover:text-custom-red"
        }`;

    const handleLogout = () => {
        localStorage.removeItem("authToken"); 
        navigate("/login");
    };

    return (
        <>
            <aside className="hidden md:flex flex-col items-center justify-between h-screen w-16 bg-card dark:bg-dark-card text-dark dark:text-card py-6">
                <div className="mb-8">
                    <Link
                        to="/"
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-custom-red text-white font-bold"
                    >
                        S
                    </Link>
                </div>

                <nav className="flex flex-col gap-6 flex-1 justify-center -mt-40">
                    <NavLink to="/" end className={linkClass}>
                        <Squares2X2Icon className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/active-bid" className={linkClass}>
                        <LockClosedIcon className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/favorite-bids" className={linkClass}>
                        <HeartIcon className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/collections" className={linkClass}>
                        <StarIcon className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/profile" className={linkClass}>
                        <UserIcon className="w-6 h-6" />
                    </NavLink>
                    <NavLink to="/settings" className={linkClass}>
                        <Cog6ToothIcon className="w-6 h-6" />
                    </NavLink>
                </nav>

                <div>
                    <button
                        onClick={handleLogout}
                        className="flex flex-col items-center justify-center gap-1 text-xs text-gray-500 hover:text-custom-red transition-colors"
                    >
                        <ArrowRightOnRectangleIcon className="w-6 h-6" />
                    </button>
                </div>
            </aside>

            <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-card dark:bg-dark-card py-3 shadow-md md:hidden">
                <NavLink to="/" end className={linkClass}>
                    <Squares2X2Icon className="w-6 h-6" />
                </NavLink>
                <NavLink to="/active-bid" className={linkClass}>
                    <LockClosedIcon className="w-6 h-6" />
                </NavLink>
                <NavLink to="/favorite-bids" className={linkClass}>
                    <HeartIcon className="w-6 h-6" />
                </NavLink>
                <NavLink to="/profile" className={linkClass}>
                    <UserIcon className="w-6 h-6" />
                </NavLink>
                <NavLink to="/collections" className={linkClass}>
                    <StarIcon className="w-6 h-6" />
                </NavLink>
                <NavLink to="/settings" className={linkClass}>
                    <Cog6ToothIcon className="w-6 h-6" />
                </NavLink>
                <button
                    onClick={handleLogout}
                    className="flex flex-col items-center justify-center gap-1 text-xs text-gray-500 hover:text-custom-red transition-colors"
                >
                    <ArrowRightOnRectangleIcon className="w-6 h-6" />
                </button>
            </nav>
        </>
    );
};

export default Sidebar;