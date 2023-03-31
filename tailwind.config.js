/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow": "spin 5s linear infinite",
            },
            width: {
                500: "500px",
            },
            height: {
                500: "500px",
            },
        },
    },
    plugins: [],
};