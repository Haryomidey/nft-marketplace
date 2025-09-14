import { FaUserCircle } from "react-icons/fa";

const UserProfileForm = () => {
    return (
        <div className="bg-card dark:bg-dark-card p-6 rounded-2xl space-y-6 shadow transition-colors">
            <div>
                <label className="block text-sm mb-2 text-dark dark:text-white">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full p-3 rounded-md bg-gray-100 dark:bg-dark focus:outline-none text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                />
            </div>

            <div className="flex items-center gap-3">
                <FaUserCircle className="text-primary text-4xl" />
                <div>
                    <p className="font-medium text-dark dark:text-white">John Smith</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Welcome Settings Page
                    </p>
                </div>
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                Save
            </button>
        </div>
    );
};

export default UserProfileForm;
