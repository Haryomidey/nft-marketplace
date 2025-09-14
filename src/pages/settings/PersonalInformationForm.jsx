const PersonalInformationForm = () => {
    return (
        <div className="bg-card dark:bg-dark-card p-6 rounded-2xl space-y-6 shadow transition-colors">
            <h3 className="text-lg font-semibold text-dark dark:text-white">
                Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm mb-2 text-dark dark:text-white">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="w-full p-3 rounded-md bg-gray-100 dark:bg-dark focus:outline-none text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-2 text-dark dark:text-white">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        className="w-full p-3 rounded-md bg-gray-100 dark:bg-dark focus:outline-none text-dark dark:text-white transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-2 text-dark dark:text-white">
                        Address
                    </label>
                    <input
                        type="text"
                        placeholder="123 Main St, City"
                        className="w-full p-3 rounded-md bg-gray-100 dark:bg-dark focus:outline-none text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-2 text-dark dark:text-white">
                        Country
                    </label>
                    <input
                        type="text"
                        placeholder="United States"
                        className="w-full p-3 rounded-md bg-gray-100 dark:bg-dark focus:outline-none text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    />
                </div>
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                Save
            </button>
        </div>
    );
};

export default PersonalInformationForm;