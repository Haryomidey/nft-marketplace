const Following = () => {
    const following = [
        { name: "Alice Johnson", items: 45, avatar: "https://i.pravatar.cc/100?img=20" },
        { name: "Michael Brown", items: 72, avatar: "https://i.pravatar.cc/100?img=21" },
        { name: "Sophia Lee", items: 38, avatar: "https://i.pravatar.cc/100?img=22" },
        { name: "Ethan Walker", items: 41, avatar: "https://i.pravatar.cc/100?img=27" },
    ];

    return (
        <div className="w-full">
            <h3 className="text-white font-semibold mb-4">Following</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {following.map((f, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between bg-dark-card rounded-xl p-4"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={f.avatar}
                                alt={f.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-white font-medium">{f.name}</h4>
                                <p className="text-xs text-gray-400">{f.items} Items</p>
                            </div>
                        </div>
                        <button className="bg-red-500 text-white text-sm px-4 py-1 rounded-lg hover:bg-red-600">
                            Unfollow
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Following;