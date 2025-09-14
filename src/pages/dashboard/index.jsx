import Images from "../../assets/images";
import TrendingBids from "./TrendingBids";

const Dashboard = () => {
    return (
        <main className="px-6 py-6 space-y-10 bg-white dark:bg-dark text-dark dark:text-card min-h-screen">
            
            <section className="grid grid-cols-4 gap-6">
                <div className="col-span-2 bg-gradient-to-r from-purple-700 to-pink-500 text-white px-8 py-4 rounded-2xl flex flex-col justify-between">
                    <h2 className="text-2xl font-semibold leading-snug">
                        Discover, Collect, Sell <br /> and Create your NFT
                    </h2>
                    <p className="text-sm text-gray-200">
                        Digital marketplace for crypto collectibles and NFTs
                    </p>
                    <div className=" flex gap-4 ">
                        <button className="px-6 py-2 bg-primary rounded-lg">Explore</button>
                        <button className="px-6 py-2 bg-custom-red rounded-lg">Create</button>
                    </div>
                </div>

                <div className="bg-card dark:bg-dark-card rounded-2xl p-4 shadow grid grid-cols-2 col-span-2 gap-4">
                    <div className="h-[150px]">
                        <img
                        src={Images.nft3}
                        alt="NFT"
                        className="rounded-lg mb-4 object-cover h-full w-full"
                    />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10">
                                <img
                                    src="https://i.pravatar.cc/100?img=3"
                                    alt="Profile"
                                    className="w-full h-full rounded-full"
                                />
                                <p className="h-2 w-2 rounded-full bg-green-400 absolute bottom-0 right-0" />
                            </div>
                            <div>
                                <h4 className="font-semibold">John Abraham</h4>
                            </div>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                            <p>Auction time <br /><span className="font-medium text-gray-500 text-xs">3h 1m 50s</span></p>
                            <p>Current Bid: <span className="text-primary">0.05 ETH</span> <br /><span className="font-medium text-gray-500 text-xs">0.15 ETH</span></p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex-1 py-2 bg-primary text-white rounded-lg">Place a Bid</button>
                            <button className="flex-1 py-2 bg-custom-red text-white rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </section>

            <TrendingBids />
        </main>
    );
};

export default Dashboard;