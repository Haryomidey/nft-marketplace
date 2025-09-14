import { FaCheckCircle, FaLock } from "react-icons/fa";
import Following from "./Following";

const UserProfileCard = () => {
    const user = {
        name: "Alice Johnson",
        avatar: "https://i.pravatar.cc/100?img=5",
        subtitle:
            "Looks like you are not verified yet. Verify yourself to use the full potential of Xtrader.",
    };

    return (
        <div className="w-full grid grid-cols-5 items-center gap-4 mb-16">
            <div className="bg-card dark:bg-dark-card rounded-2xl p-5 col-span-2 shadow">
                <div>
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover mb-5"
                    />
                    <div>
                        <h3 className="text-dark dark:text-white font-semibold">
                            Welcome, {user.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-xs max-w-sm">
                            {user.subtitle}
                        </p>
                    </div>
                </div>

                <div className="mt-5 space-y-3 w-full">
                    <button className="flex items-center gap-2 text-dark dark:text-white hover:text-green-500 transition-colors">
                        <span className="bg-green-500 text-white h-8 w-8 rounded-full flex items-center justify-center">
                            <FaCheckCircle />
                        </span>
                        <span className="text-sm">Verify account</span>
                    </button>

                    <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-600 my-3"></div>

                    <button className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors">
                        <span className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center">
                            <FaLock />
                        </span>
                        <span className="text-sm">
                            Two-factor Authentication ( 2FA )
                        </span>
                    </button>
                </div>
            </div>

            <div className="col-span-3 h-full flex items-end">
                <Following />
            </div>
        </div>
    );
};

export default UserProfileCard;
