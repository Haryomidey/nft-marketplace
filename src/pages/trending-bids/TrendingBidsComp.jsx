import { FiTrendingUp, FiUsers } from "react-icons/fi";
import { FaGavel } from "react-icons/fa";

const TrendingBidsComp = () => {
    const chartPoints = [
        [0, 140], [30, 60], [60, 80], [90, 40],
        [120, 100], [150, 60], [180, 140], [210, 100]
    ];
    const polylinePoints = chartPoints.map(p => p.join(",")).join(" ");

    return (
        <section className="grid grid-cols-3 gap-6">
            <div className="bg-dark-card p-6 rounded-2xl flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-dark p-3 rounded-xl">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-lg">
                        <FiTrendingUp className="text-white text-xl" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">24K</h4>
                        <p className="text-sm text-gray-400">Artworks</p>
                    </div>
                    <span className="ml-auto text-green-400 text-sm font-medium">
                        +168.001%
                    </span>
                </div>

                <div className="flex items-center gap-4 bg-dark p-3 rounded-xl">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-lg">
                        <FaGavel className="text-white text-xl" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">89</h4>
                        <p className="text-sm text-gray-400">Auction</p>
                    </div>
                    <span className="ml-auto text-red-400 text-sm font-medium">
                        -168.001%
                    </span>
                </div>

                <div className="flex items-center gap-4 bg-dark p-3 rounded-xl">
                    <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-lg">
                        <FiUsers className="text-white text-xl" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">82K</h4>
                        <p className="text-sm text-gray-400">Creators</p>
                    </div>
                    <span className="ml-auto text-green-400 text-sm font-medium">
                        +168.001%
                    </span>
                </div>
            </div>

            <div className="bg-dark-card p-6 rounded-2xl">
                <h3 className="text-white mb-4 font-semibold">ETH Price</h3>
                <svg viewBox="0 0 220 160" className="w-full h-48">
                    <line x1="0" y1="140" x2="220" y2="140" className="stroke-gray-700" strokeWidth="1" />
                    <line x1="0" y1="100" x2="220" y2="100" className="stroke-gray-700" strokeWidth="1" />
                    <line x1="0" y1="60" x2="220" y2="60" className="stroke-gray-700" strokeWidth="1" />

                    <polyline
                        fill="none"
                        stroke="#6F4FF2"
                        strokeWidth="3"
                        points={polylinePoints}
                    />
                    {chartPoints.map(([x, y], i) => (
                        <circle key={i} cx={x} cy={y} r="4" fill="#6F4FF2" />
                    ))}
                </svg>
            </div>

            <div className="bg-dark-card p-6 rounded-2xl flex flex-col items-center justify-center">
                <h3 className="text-white mb-4 font-semibold">Statistics</h3>
                <div className="relative w-40 h-40">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                            className="text-primary stroke-current"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="80, 100"
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="text-dark stroke-current"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="20, 100"
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                </div>
                <div className="flex gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-3 h-3 bg-primary rounded-full"></span>
                        Artwork Sold
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                        Artwork Cancel
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingBidsComp;