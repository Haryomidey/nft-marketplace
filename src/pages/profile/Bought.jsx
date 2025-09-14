import Images from "../../assets/images";

const Bought = () => {
    const titles = [
        "Liquid Wave",
        "Neon Dreams",
        "Ethereal Glow",
        "Quantum Realm",
        "Digital Mirage",
        "Crypto Bloom",
        "Futuristic Grid",
        "Silent Horizon",
    ];

    const users = [
        { name: "Alice Johnson", avatar: "https://i.pravatar.cc/100?img=30" },
        { name: "Michael Brown", avatar: "https://i.pravatar.cc/100?img=31" },
        { name: "Sophia Lee", avatar: "https://i.pravatar.cc/100?img=32" },
        { name: "David Kim", avatar: "https://i.pravatar.cc/100?img=33" },
        { name: "Emma Wilson", avatar: "https://i.pravatar.cc/100?img=34" },
        { name: "Oliver Martinez", avatar: "https://i.pravatar.cc/100?img=35" },
        { name: "Luna Carter", avatar: "https://i.pravatar.cc/100?img=36" },
        { name: "Ethan Walker", avatar: "https://i.pravatar.cc/100?img=37" },
    ];

    const bought = Array(8)
        .fill(null)
        .map((_, idx) => {
            const title = titles[idx % titles.length];
            const user = users[idx % users.length];
            return {
                title,
                image: Images[`nft${idx + 1}`],
                avatar: user.avatar,
            };
        });

    return (
        <div>
            <h3 className="text-dark dark:text-white font-semibold mb-4">My Bought</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bought.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-card dark:bg-dark-card rounded-2xl overflow-hidden shadow transition-colors"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <img
                                src={item.avatar}
                                alt="Owner"
                                className="w-8 h-8 rounded-full border-2 border-card dark:border-dark-card absolute bottom-2 right-2"
                            />
                        </div>
                        <div className="p-3">
                            <p className="text-dark dark:text-white text-sm font-medium">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bought;