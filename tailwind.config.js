/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/images/HeroImage.png')",
        "subscribe-image": "url('/src/assets/images/SubscribeBg.png')",
        "contact-image": "url('/src/assets/images/CustomerSupportImage.jpeg')",
        "about-image": "url('/src/assets/images/AboutUsBg.png')",
        "contact-us-image": "url('/src/assets/images/ContactUsBg.png')",
        "team-image": "url('/src/assets/images/TeamBg.png')",
        "alpha-bgimage": "url('/src/assets/images/AlphaTribeBg.png')",
        "mufasa-hero-bgimage": "url('/src/assets/images/MufasaHeroBg.png')",
        "mufasa-big-bgimage": "url('/src/assets/images/MufasaBigNewsBg.png')",
      },
      colors: {
        primary: "#DDB057",
        primary2: "#93753A",
        primary3: "#DDB05775",
      },
    },
  },
  plugins: [],
};
