import {
    Squares2X2Icon,
    LockClosedIcon,
    HeartIcon,
    StarIcon,
    UserIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="flex flex-col items-center justify-between h-screen w-16 bg-card dark:bg-dark-card text-dark dark:text-card py-6">
            
            <div className="mb-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-custom-red text-white font-bold">
                    S
                </div>
            </div>

            <nav className="flex flex-col gap-6 flex-1 justify-center -mt-40">
                <Link to="/">
                    <Squares2X2Icon className="w-6 h-6 cursor-pointer hover:text-custom-red" />
                </Link>
                <Link to="/active-bid">
                    <LockClosedIcon className="w-6 h-6 cursor-pointer hover:text-custom-red" />
                </Link>
                <Link to="/favorite-bids">
                    <HeartIcon className="w-6 h-6 cursor-pointer hover:text-custom-red" />
                </Link>
                <Link to="/collections">
                    <StarIcon className="w-6 h-6 cursor-pointer hover:text-custom-red" />
                </Link>
                <Link to="/profile">
                    <UserIcon className="w-6 h-6 cursor-pointer hover:text-custom-red" />
                </Link>
                <Link to="/settings">
                    <Cog6ToothIcon className="w-6 h-6 cursor-pointer hover:text-custom-red" />
                </Link>
            </nav>

            <div>
                <Link to="/logout">
                    <ArrowRightOnRectangleIcon className="w-6 h-6 cursor-pointer hover:text-custom-red" />
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
