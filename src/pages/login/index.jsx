import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/24/solid";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "admin@test.com" && password === "123456") {
            localStorage.setItem("authToken", "demo_token");
            navigate("/");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-10">
            <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-custom-red text-white rounded-full shadow-md mb-4">
                        <LockClosedIcon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Welcome Back
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Sign in to continue
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

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-custom-red text-white font-medium shadow-lg hover:opacity-90 transition"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-custom-red font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;