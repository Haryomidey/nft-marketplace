import { FaCheckCircle, FaLock } from "react-icons/fa";
import Following from "./Following";

const UserProfileCard = () => {
    const user = {
        name: "Alice Johnson",
        avatar: "https://i.pravatar.cc/100?img=5",
        subtitle: "Looks like you are not verified yet. Verify yourself to use the full potential of Xtrader."
    }

    return (
        <div className="w-full grid grid-cols-5 items-center gap-4 mb-16">
            <div className="bg-dark-card rounded-2xl p-5 col-span-2">
                <div>
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover mb-5"
                    />
                    <div>
                        <h3 className="text-white font-semibold">
                            Welcome, {user.name}
                        </h3>
                        <p className="text-gray-200 text-xs max-w-sm">{user.subtitle}</p>
                    </div>
                </div>

                <div className="mt-5 space-y-3 w-full">
                    <button className="flex items-center gap-2">
                        <p className="bg-green-500 text-white h-8 w-8 rounded-full flex items-center justify-center">
                            <FaCheckCircle />
                        </p>
                        <span className="text-sm">Verify account</span>
                    </button>

                    <div className="w-full h-[1px] bg-[#6b6a6a] my-3"></div>

                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                        <p className="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center">
                            <FaLock />
                        </p>
                        <span className="text-sm">
                            Two-factor Authentication ( 2FA )
                        </span>
                    </button>
                </div>
            </div>

            <div className="col-span-3 h-fullflex items-end">
                <Following />
            </div>
        </div>
    );
};

export default UserProfileCard;