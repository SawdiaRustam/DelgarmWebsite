/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/**/*.{js,ts,jsx,tsx}',
        './src/**/**/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            xs: "320px",
            sm: "640px",
            md: "768px",
            lg: "991px",
            xl: "1024px",
            xxl: "1280px",
            "2xl": "1536px",
          },
        extend: {
            colors: {
                textPurple: "#8C52FF",
                bgPurple:"#5E17EB",
                textWhiteLinks: "#E5E5E5",
                textWhiteHeadings: "#FFFFFF",
                textWhiteCart: "#D7D7D7",
                OrangeActiveLink: "#FF914D",
                simpleText: "#F8F8FF",
                grayText: "#DCDCDC",
                DarkPurple: "#4B0082",
              },
        },
    },
    plugins: [],
}