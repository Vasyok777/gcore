/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      padding: {
        DEFAULT: "1.875rem",
        md: "2rem",
        lg: "3rem",
        xl: "3.75rem",
      },
    },
    extend: {
      boxShadow: {
        orange: "0px 2px 30px 2px rgba(248, 171, 58, 0.80)",
      },
      spacing: {
        5.5: "1.375rem",
        6: "1.5rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
        18: "4.5rem",
        25: "6.25rem",
        30: "7.5rem",
        35: "8.75rem",
        37: "9.25rem",
        38: "9.5rem",
        42: "10.5rem",
        43: "10.75rem",
        45: "11.25rem",
        57.5: "14.375rem",
        62: "15.5rem",
        65: "16.25rem",
        67: "16.75rem",
        75: "18.75rem",
        82.5: "20.625rem",
        85: "21.25rem",
        94: "23.5rem",
        105: "26.25rem",
        115: "28.75rem",
        125: "31.25rem",
        140: "35rem",
        150: "37.5rem",
        154: "38.5rem",
        170: "42.5rem",
        205: "51.25rem",
        256: "64rem",
        300: "75rem",
        485: "121.25rem",
      },
      animation: {
        ticker: "ticker 8s linear infinite",
        // dot1: 'dot1 8s infinite',
        // dot2: 'dot2 8s infinite',
        // dot3: 'dot3 8s infinite',
        // dot4: 'dot4 8s infinite',
      },
      keyframes: {
        ticker: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(-100%)"},
        },
        // dot1: {
        //   '0%': { width: '18px', background: 'white' },
        //   '25%': { width: '18px', background: 'white' },
        //   '50%': { width: '3px', background: '#7F7F7F' },
        //   '75%': { width: '3px', background: '#7F7F7F' },
        //   '100%': { width: '3px', background: 'white' },
        // },
      },
    },
  },
  plugins: [],
}
