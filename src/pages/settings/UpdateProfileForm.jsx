const UpdateProfileForm = () => {
    return (
        <div className="bg-card dark:bg-dark-card p-6 rounded-2xl space-y-6 shadow transition-colors">
            <div>
                <label className="block text-sm mb-2 text-dark dark:text-white">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full p-3 rounded-md bg-gray-100 dark:bg-dark focus:outline-none text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm mb-2 text-dark dark:text-white">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="********"
                    className="w-full p-3 rounded-md bg-gray-100 dark:bg-dark focus:outline-none text-dark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                />
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                Save
            </button>
        </div>
    );
};

export default UpdateProfileForm;