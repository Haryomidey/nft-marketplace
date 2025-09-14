import {
    Squares2X2Icon,
    LockClosedIcon,
    HeartIcon,
    StarIcon,
    UserIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const linkClass = ({ isActive }) =>
        `w-6 h-6 cursor-pointer transition-colors ${
            isActive ? "text-custom-red" : "hover:text-custom-red"
        }`;

    return (
        <aside className="flex flex-col items-center justify-between h-screen w-16 bg-card dark:bg-dark-card text-dark dark:text-card py-6">
            
            <div className="mb-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-custom-red text-white font-bold">
                    S
                </div>
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
                <NavLink to="/logout" className={linkClass}>
                    <ArrowRightOnRectangleIcon className="w-6 h-6" />
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;