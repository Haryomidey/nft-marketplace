import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        localStorage.setItem("authToken", "demo_token");
        localStorage.setItem("userName", name);

        navigate("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black sm:px-4 sm:py-10">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 sm:rounded-2xl sm:shadow-xl p-8">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-custom-red text-white rounded-full shadow-md mb-4">
                        <UserPlusIcon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Create Account
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Join us and start trading today
                    </p>
                </div>

                {error && (
                    <div className="mt-4 p-3 rounded-lg bg-red-100 text-red-600 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-custom-red focus:outline-none"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-custom-red focus:outline-none"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-custom-red focus:outline-none"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="mt-1 w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-custom-red focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-custom-red text-white font-medium shadow-lg hover:opacity-90 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-custom-red font-medium hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;