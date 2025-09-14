import BreadCrumbHeader from "../../components/BreadCrumbHeader";
import PersonalInformationForm from "./PersonalInformationForm";
import UpdateProfileForm from "./UpdateProfileForm";
import UserProfileForm from "./UserProfileForm";

const Settings = () => {
    const tabs = [
        "Profile",
        "Application",
        "Security",
        "Activity",
        "Payment Method",
        "API",
    ];

    return (
        <main className="w-full px-6 py-6 text-dark dark:text-card min-h-screen transition-colors">
            <BreadCrumbHeader title="Settings" page="Settings" />

            <nav className="flex flex-wrap gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                {tabs.map((item, index) => (
                    <button
                        key={index}
                        className={`text-sm font-medium transition-colors ${
                            item === "Profile"
                                ? "text-primary border-b-2 border-primary pb-1"
                                : "text-gray-600 dark:text-gray-400 hover:text-primary"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
                <UserProfileForm />
                <UpdateProfileForm />
            </div>

            <PersonalInformationForm />
        </main>
    );
};

export default Settings;