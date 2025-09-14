const PersonalInformationForm = () => {
    return (
        <div className="bg-dark-card p-6 rounded-2xl space-y-6">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm mb-2">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="w-full p-3 rounded-md bg-dark focus:outline-none text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-2">Date of Birth</label>
                    <input
                        type="date"
                        className="w-full p-3 rounded-md bg-dark focus:outline-none text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-2">Address</label>
                    <input
                        type="text"
                        placeholder="123 Main St, City"
                        className="w-full p-3 rounded-md bg-dark focus:outline-none text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-2">Country</label>
                    <input
                        type="text"
                        placeholder="United States"
                        className="w-full p-3 rounded-md bg-dark focus:outline-none text-white"
                    />
                </div>
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md">
                Save
            </button>
        </div>
    );
};

export default PersonalInformationForm;