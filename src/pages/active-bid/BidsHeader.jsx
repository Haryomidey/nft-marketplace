import { FaPalette, FaGavel, FaUsers, FaBan } from "react-icons/fa";
import BreadCrumbHeader from "../../components/BreadCrumbHeader";

const stats = [
    { label: "Artworks", value: "24K", color: "bg-purple-500", Icon: FaPalette },
    { label: "Auction", value: "82K", color: "bg-green-500", Icon: FaGavel },
    { label: "Creators", value: "200", color: "bg-yellow-400", Icon: FaUsers },
    { label: "Canceled", value: "89", color: "bg-red-500", Icon: FaBan },
];

const BidsHeader = () => {
    return (
        <section className="w-full mb-16">
            <BreadCrumbHeader title={'Bids'} page={'Bids'} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((item, idx) => {
                    const Icon = item.Icon;
                    return (
                        <div
                            key={idx}
                            className="flex items-center bg-dark-card rounded-2xl p-5 shadow-sm"
                        >
                            <div
                                className={`flex items-center justify-center w-12 h-12 rounded-full ${item.color}`}
                            >
                                <Icon className="text-white" size={18} />
                            </div>

                            <div className="ml-4">
                                <h3 className="text-white text-lg font-semibold">{item.value}</h3>
                                <p className="text-gray-400 text-sm">{item.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default BidsHeader;