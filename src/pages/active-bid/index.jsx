import ActiveBidComp from "./ActiveBidComp";
import BidsHeader from "./BidsHeader";

const ActiveBids = () => {
    const bids = [
        {
            id: 1,
            image: "https://picsum.photos/60/60?random=1",
            title: "Cute Cube Cool",
            user: "John Abraham",
            openPrice: "0.0025 ETH",
            yourOffer: "0.0025 ETH",
            recentOffer: "0.0025 ETH",
            recentOfferAvatar: "https://i.pravatar.cc/100?img=1",
            timeLeft: "2 Hours 1 min 30s",
        },
        {
            id: 2,
            image: "https://picsum.photos/60/60?random=2",
            title: "Liquid Wave",
            user: "John Abraham",
            openPrice: "0.0025 ETH",
            yourOffer: "0.0025 ETH",
            recentOffer: "0.0025 ETH",
            recentOfferAvatar: "https://i.pravatar.cc/100?img=2",
            timeLeft: "2 Hours 1 min 30s",
        },
        {
            id: 3,
            image: "https://picsum.photos/60/60?random=3",
            title: "Cute Cube Cool",
            user: "John Abraham",
            openPrice: "0.0025 ETH",
            yourOffer: "0.0025 ETH",
            recentOffer: "0.0025 ETH",
            recentOfferAvatar: "https://i.pravatar.cc/100?img=3",
            timeLeft: "2 Hours 1 min 30s",
        },
        {
            id: 4,
            image: "https://picsum.photos/60/60?random=4",
            title: "Liquid Wave",
            user: "John Abraham",
            openPrice: "0.0025 ETH",
            yourOffer: "0.0025 ETH",
            recentOffer: "0.0025 ETH",
            recentOfferAvatar: "https://i.pravatar.cc/100?img=4",
            timeLeft: "2 Hours 1 min 30s",
        },
        {
            id: 5,
            image: "https://picsum.photos/60/60?random=5",
            title: "Liquid Wave",
            user: "John Abraham",
            openPrice: "0.0025 ETH",
            yourOffer: "0.0025 ETH",
            recentOffer: "0.0025 ETH",
            recentOfferAvatar: "https://i.pravatar.cc/100?img=5",
            timeLeft: "2 Hours 1 min 30s",
        },
    ];

    return (
        <main className="w-full px-6 py-6 text-dark dark:text-card min-h-screen">
            <BidsHeader />
            <ActiveBidComp bids={bids} />
        </main>
    );
};

export default ActiveBids;