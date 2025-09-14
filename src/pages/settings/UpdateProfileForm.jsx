const UpdateProfileForm = () => {
    return (
        <div className="bg-dark-card p-6 rounded-2xl space-y-6">
            <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full p-3 rounded-md bg-dark focus:outline-none text-white"
                />
            </div>

            <div>
                <label className="block text-sm mb-2">Password</label>
                <input
                    type="password"
                    placeholder="********"
                    className="w-full p-3 rounded-md bg-dark focus:outline-none text-white"
                />
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md">
                Save
            </button>
        </div>
    );
};

export default UpdateProfileForm;