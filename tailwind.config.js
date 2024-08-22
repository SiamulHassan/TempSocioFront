/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary_bg: "var(--primary_bg)",
      single_color: "var(--single_color)",
      secondary_bg: "var(--secondary_bg)",
      hover_clr: "var(--hover_clr)",
      blur: "var(--blur)",
      text_color: "var(--text_color)",
      line_color: "var(--line_color)",
      primary_color: "var(--primary_color)",
      secondary_color: "var(--secondary_color)",
      title_color: "var(--title_color)",
      black: "var(--black)",
      white: "var(--white)",
      green: "var(--green)",
      blue: "var(--blue)",
      red: "var(--red)",
      yellow: "var(--yellow)",
      purple_100: "var(--purple_100)",
      pink_100: "var(--pink_100)",
      cyan_100: "var(--cyan_100)",
    },
    fontFamily: {
      gilroyReguler: ["Gilroy Regular"],
      gilroyLight: ["Gilroy Light"],
      gilroyMedium: ["Gilroy Medium"],
      gilroySemiBold: ["Gilroy Semi Bold"],
      gilroyBold: ["Gilroy Bold"],
      gilroyExtraBold: ["Gilroy Extra Bold"],
    },
    extend: {
      backgroundImage: {
        pattern: "linear-gradient(to right, #3b82f6,#06b6d4)",
      },
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1620px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
