import { useState, useMemo } from "react";
import { trendingBidsData } from "../../data/trendingBids";
import BidCard from "../../components/BidCard";

const TrendingBids = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredData = useMemo(() => {
        if (activeCategory === "All") return trendingBidsData;
        return trendingBidsData.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <section>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Trending Bids</h3>
                <div className="flex gap-3">
                    {["All", "Artwork", "Book"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-1 text-sm rounded-lg ${
                                activeCategory === cat
                                    ? "bg-custom-red text-white"
                                    : "bg-card dark:bg-dark-card"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredData.map((item, index) => (
                    <BidCard item={item} key={index} />
                ))}
            </div>
        </section>
    );
};

export default TrendingBids;