
const BidCard = ({ item }) => {
    const formatTimeLeft = (endDate) => {
        const now = new Date();
        const diff = new Date(endDate) - now;
    
        if (diff <= 0) return "Ended";
    
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
        return `${hours}h ${minutes}m ${seconds}s`;
    };
    
    return (
        <div
            key={item.id}
            className="bg-card dark:bg-dark-card rounded-2xl shadow p-4"
        >
            <img
                src={item.image}
                alt={item.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-500">Auction time</p>
            <p className="text-xs text-gray-400">
                {formatTimeLeft(item.auctionEnd)}
            </p>
            <div className="mt-3 flex justify-between text-sm">
                <p>{item.currentBid}</p>
                <p className="font-medium">{item.highestBid}</p>
            </div>
            <button className="mt-4 w-full py-2 bg-primary text-white rounded-lg">
                Place a Bid
            </button>
        </div>
    )
}

export default BidCard;