/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        screens: {
            sm: "375px",
            xl: "1440px",
        },
        extend: {
            colors: {
                white: "hsl(0, 0%, 100%)",
                slate300: "hsl(212, 45%, 89%)",
                slate500: "hsl(216, 15%, 48%)",
                slate900: "hsl(218, 44%, 22%)",
                customBlue: "hsl(228, 45%, 44%)",
            },
        },
    },
    plugins: [],
};
