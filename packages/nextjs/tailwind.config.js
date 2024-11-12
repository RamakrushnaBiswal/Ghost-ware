/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1E3A8A",
          "primary-content": "#FFFFFF",
          secondary: "#4B5563",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#4F4F4F",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#1E3A8A", // Azul oscuro
          "primary-content": "#FFFFFF", // Blanco
          secondary: "#4B5563", // Gris oscuro
          "secondary-content": "#FFFFFF", // Blanco
          accent: "#3B82F6", // Azul
          "accent-content": "#FFFFFF", // Blanco
          neutral: "#1F2937", // Gris muy oscuro
          "neutral-content": "#E5E7EB", // Gris claro
          "base-100": "#111827", // Gris oscuro
          "base-200": "#1F2937", // Gris más oscuro
          "base-300": "#374151", // Gris intermedio
          "base-content": "#E5E7EB", // Gris claro
          info: "#3B82F6", // Azul
          success: "#34D399", // Verde
          warning: "#FBBF24", // Amarillo
          error: "#F87171", // Rojo

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
        primary: "0 0 12px -2px rgba(126, 46, 132, 0.25)",
      },
      backgroundImage: {
        heroPattern: "url('../public/hero_bg.svg')",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        active: "#1E40AF", // Azul oscuro
        darkOrange: "#3B82F6",
        lightOrange: "#F3B353",
        lightYellow: "#FFFBEF",
        ocre: "#988D3D",
        darkGreen: "#1A3F37",
        lightGreen: "#F6FFEE",
        darkGrey: "#4B5563", // Gris oscuro
        lightGrey: "rgba(0,0,0,0.2)",
        grey: "#6B7280", // Gris medio
        orangeGrey: "#4B4B4B",
        borderGrey: "#9CA3AF", // Gris claro
        progressGrey: "#E5E7E9", // Gris más claro
        beige: "#FBE5D1",
        lightBeige: "#F9F5E3",
        pink: "#EF798A",
      },
      height: {
        heroHeight: "675px",
      },
      fontSize: {
        h1: "40px",
        h2: "50px",
        h3: "30px",
        title: "23px",
        h4: "20px",
        p: "20px",
        subP: "15px",
        btn: "12px",
        copyRight: "16px",
      },
    },
  },
};
