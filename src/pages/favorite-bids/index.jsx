import BreadCrumbHeader from "../../components/BreadCrumbHeader";
import { trendingBidsData } from "../../data/trendingBids";
import BidCard from "../../components/BidCard";


const FavoriteBids = () => {
    return (
        <main className="w-full px-6 py-6 bg-white dark:bg-dark text-dark dark:text-card min-h-screen">
            <BreadCrumbHeader title={'Favorite Items'} page={'Favorite'} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {trendingBidsData.slice(10, 25).map((item, index) => (
                    <BidCard item={item} key={index} />
                ))}
            </div>

        </main>
    )
}

export default FavoriteBids;