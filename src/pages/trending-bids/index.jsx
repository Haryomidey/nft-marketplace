import ActivityAndCreators from "./ActivityAndCreators";
import TrendingBidsComp from "./TrendingBidsComp";

const TrendingBids = () => {
    return (
        <main className="w-full px-6 py-6 dark:text-card min-h-screen">
            <TrendingBidsComp />
            <ActivityAndCreators />
        </main>
    )
}

export default TrendingBids;