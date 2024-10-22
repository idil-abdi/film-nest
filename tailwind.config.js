import flowbite  from "flowbite-react/tailwind";
import tailwindNoScroll from 'tailwindcss-no-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'sea-green': '#3dd2cc',
        'sub-bg': '#212121'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    tailwindNoScroll
  ],
}

