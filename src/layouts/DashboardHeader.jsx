import { MagnifyingGlassIcon, BellIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-primary-bg dark:bg-dark shadow">
            <div className="flex items-center w-1/3">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search Here"
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-dark-card text-dark dark:text-card outline-none"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
            </div>

            <div className="flex items-center gap-6">

                <button onClick={toggleTheme} className="focus:outline-none">
                    {theme === "light" ? (
                        <MoonIcon className="w-6 h-6 text-gray-500 hover:text-custom-red" />
                    ) : (
                        <SunIcon className="w-6 h-6 text-yellow-400 hover:text-custom-red" />
                    )}
                </button>
                
                <BellIcon className="w-6 h-6 cursor-pointer text-gray-500 hover:text-custom-red" />

                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-custom-red">
                    <img
                        src="https://i.pravatar.cc/100?img=5"
                        alt="User"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
