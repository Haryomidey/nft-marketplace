import { FiX } from "react-icons/fi";

const ActiveBidComp = ({ bids }) => {
    return (
        <section className="w-full">
            <div className="w-full flex items-center justify-between mb-6">
                <h3 className="text-dark dark:text-white font-semibold">Active Bids</h3>
                <button className="px-5 py-2 bg-primary text-white rounded-lg">
                    Place Bid
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {bids.map((bid) => (
                    <div
                        key={bid.id}
                        className="bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                        {/* Card Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center gap-3">
                                <img
                                    src={bid.image}
                                    alt={bid.title}
                                    className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div>
                                    <h4 className="text-dark dark:text-white font-medium">
                                        {bid.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {bid.user}
                                    </p>
                                </div>
                            </div>
                            <button className="text-dark dark:text-white hover:text-red-600 transition-colors">
                                <FiX size={18} />
                            </button>
                        </div>

                        {/* Card Body */}
                        <div className="p-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex justify-between">
                                <span className="font-medium">Open Price:</span>
                                <span>{bid.openPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Your Offer:</span>
                                <span>{bid.yourOffer}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-medium">Recent Offer:</span>
                                <span className="flex items-center gap-2">
                                    <img
                                        src={bid.recentOfferAvatar}
                                        alt="Offer Avatar"
                                        className="w-6 h-6 rounded-full"
                                    />
                                    {bid.recentOffer}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Time Left:</span>
                                <span>{bid.timeLeft}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ActiveBidComp;