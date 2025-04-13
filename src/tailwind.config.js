/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
        "./components/**/*.{html,js,jsx,ts,tsx}",
        "./app/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontfamily: {
                cursive: ["Pacifico", "cursive"],
            },
        },
    },
    plugins: [],
};