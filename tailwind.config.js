/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-default": "#fff",
        divider: "#dcdfe4",
        "helpers-clickable-empty-areas": "rgba(255, 255, 255, 0)",
        "text-disabled": "#8a94a6",
        "text-primary": "#212636",
        "text-secondary": "#667085",
        "success-main": "#15b79f",
        "background-level1": "#f9fafb",
        "chip-outlined-border": "#b3b9c6",
        "primary-dark": "#4e36f5",
        "helpers-buttoncontinsideborder": "rgba(255, 255, 255, 0.16)",
        "primary-states-selected": "rgba(99, 91, 255, 0.08)",
        "primary-main": "#635bff",
        "success-shades-100": "#ccfbef",
        "success-shades-900": "#134e48",
        "warning-shades-200": "#ffe587",
        silver: "#c4c4c4",
        tomato: "#f04438",
        "success-shades-800": "#115e56",
      },
      spacing: {},
      fontFamily: {
        "typography-caption": "Satoshi",
        "typography-body-2": "Manrope",
        "typography-caption1": "Inter",
      },
      borderRadius: {
        xl: "20px",
        "81xl": "100px",
        "27xl": "46px",
        "1181xl": "1200px",
        "7xs-2": "5.2px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      smi: "13px",
      "13xl": "32px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      "5xs": "8px",
      lgi: "19px",
      "7xl": "26px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
