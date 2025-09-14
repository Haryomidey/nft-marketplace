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

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600 dark:text-gray-400">
                    <thead>
                        <tr className="text-gray-500 dark:text-gray-300 text-xs uppercase">
                            <th className="px-4 py-3">
                                <input type="checkbox" className="form-checkbox rounded" />
                            </th>
                            <th className="px-4 py-3">Item List</th>
                            <th className="px-4 py-3">Open Price</th>
                            <th className="px-4 py-3">Your Offer</th>
                            <th className="px-4 py-3">Recent Offer</th>
                            <th className="px-4 py-3">Time Left</th>
                            <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-dark">
                        {bids.map((bid) => (
                            <tr
                                key={bid.id}
                                className="bg-card dark:bg-dark hover:bg-primary-bg dark:hover:bg-dark-card transition-colors rounded-xl"
                            >
                                <td className="px-4 py-4">
                                    <input type="checkbox" className="form-checkbox rounded" />
                                </td>

                                <td className="px-4 py-4 flex items-center gap-3">
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
                                </td>

                                <td className="px-4 py-4">{bid.openPrice}</td>
                                <td className="px-4 py-4">{bid.yourOffer}</td>

                                <td className="px-4 py-4 flex items-center gap-2">
                                    <img
                                        src={bid.recentOfferAvatar}
                                        alt="Offer Avatar"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    {bid.recentOffer}
                                </td>

                                <td className="px-4 py-4">{bid.timeLeft}</td>

                                <td className="px-4 py-4">
                                    <button className="text-dark dark:text-white hover:text-red-600 transition-colors">
                                        <FiX size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ActiveBidComp;
