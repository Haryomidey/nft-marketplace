import { FaUserCircle } from "react-icons/fa";

const UserProfileForm = () => {
    return (
        <div className="bg-dark-card p-6 rounded-2xl space-y-6">
            <div>
                <label className="block text-sm mb-2">Full Name</label>
                <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full p-3 rounded-md bg-dark focus:outline-none text-white"
                />
            </div>

            <div className="flex items-center gap-3">
                <FaUserCircle className="text-primary text-4xl" />
                <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-xs text-gray-400">Welcome Settings Page</p>
                </div>
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md">
                Save
            </button>
        </div>
    );
};

export default UserProfileForm;