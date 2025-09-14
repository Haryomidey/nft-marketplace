const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateActivities = (count = 8) => {
    const users = ["Papaya", "Mango", "Lime", "Orchid", "Zephyr", "Cosmo", "Luna", "Orion"];
    const actions = [
        (user) => `Purchase by ${user} for ${(Math.random() * 0.5 + 0.01).toFixed(2)} ETH`,
        () => `${(Math.random() * 0.5 + 0.01).toFixed(2)} ETH Received`,
        () => `Started Following you`,
        () => `Has been sold by ${(Math.random() * 10 + 1).toFixed(2)} ETH`,
        () => `Liked your NFT`,
        () => `Placed a bid of ${(Math.random() * 2 + 0.05).toFixed(2)} ETH`,
    ];
    const times = ["2 mins ago", "5 mins ago", "10 mins ago", "20 mins ago", "30 mins ago", "1h ago"];

    return Array(count)
        .fill(null)
        .map(() => {
            const user = getRandomElement(users);
            const action = getRandomElement(actions)(user);
            const time = getRandomElement(times);
            return { user, action, time };
        });
};

const ActivityAndCreators = () => {
    const activities = generateActivities(8);

    const creators = Array(8).fill(null).map((_, i) => ({
        user: `Creator ${i + 1}`,
        items: `${Math.floor(Math.random() * 100)} Items`,
        avatar: `https://i.pravatar.cc/100?img=${i + 5}`,
    }));

    return (
        <section className="grid grid-cols-2 gap-6 mt-10">
            {/* Recent Activity */}
            <div className="bg-dark-card rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-semibold">Recent Activity</h3>
                    <button className="text-primary text-sm font-medium">See more</button>
                </div>
                <div className="flex flex-col gap-4">
                    {activities.map((act, i) => (
                        <div key={i} className="flex items-center justify-between bg-dark px-4 py-3 rounded-xl">
                            <div className="flex items-center gap-3">
                                <img
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt={act.user}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{act.user}</h4>
                                    <p className="text-gray-400 text-xs">{act.action}</p>
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs">{act.time}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Creators */}
            <div className="bg-dark-card rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-6">Top Creators</h3>
                <div className="grid grid-cols-2 gap-4">
                    {creators.map((creator, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-dark px-4 py-3 rounded-xl"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={creator.avatar}
                                    alt={creator.user}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{creator.user}</h4>
                                    <p className="text-gray-400 text-xs">{creator.items}</p>
                                </div>
                            </div>
                            <button className="px-4 py-1 border border-primary text-primary rounded-lg text-xs">
                                Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivityAndCreators;