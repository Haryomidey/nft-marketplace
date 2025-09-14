/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6F4FF2",
                "primary-bg": "#F2F2F2",
                dark: "#131129",
                "dark-card": "#1D1932",
                card: "#FFFFFF",
                "custom-red": "#DC3546",
            },
        },
    },
    plugins: [],
};
