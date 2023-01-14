/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                eucalyptus: {
                    100: "#EBFAEB",
                    200: "#C0F0C3",
                    300: "#27AE60",
                },
            },
        },
    },
    plugins: [],
};
