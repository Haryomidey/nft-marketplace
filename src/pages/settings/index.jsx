import BreadCrumbHeader from "../../components/BreadCrumbHeader";
import PersonalInformationForm from "./PersonalInformationForm";
import UpdateProfileForm from "./UpdateProfileForm";
import UserProfileForm from "./UserProfileForm";


const Settings = () => {

    return (
        <main className="w-full px-6 py-6 bg-white dark:bg-dark text-dark dark:text-card min-h-screen">
            <BreadCrumbHeader title={'Settings'} page={'Settings'} />

             <nav className="flex space-x-6 border-b border-gray-700 pb-4">
                {["Profile", "Application", "Security", "Activity", "Payment Method", "API"].map((item, index) => (
                    <button
                        key={index}
                        className={`text-sm hover:text-primary transition ${
                            item === "Profile" ? "text-primary" : "text-gray-300"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </nav>

            <div className="grid grid-cols-2 gap-6 my-6">
                <UserProfileForm />

                <UpdateProfileForm />
            </div>

            <PersonalInformationForm />

        </main>
    )
}

export default Settings;