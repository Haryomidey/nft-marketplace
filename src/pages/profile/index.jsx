import BreadCrumbHeader from "../../components/BreadCrumbHeader";
import Bought from "./Bought";
import UserProfileCard from "./UserProfileCard";


const Profile = () => {

    return (
        <main className="w-full px-6 py-6 text-dark dark:text-card min-h-screen">
            <BreadCrumbHeader title={'Profile'} page={'Profile'} />

            <UserProfileCard />
            <Bought />

        </main>
    )
}

export default Profile;