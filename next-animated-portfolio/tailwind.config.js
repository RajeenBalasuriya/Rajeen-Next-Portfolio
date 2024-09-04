/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-to-blue': 'linear-gradient(to bottom, #000000, #070F2B)', // Black to deep blue
        'grey-to-purple': 'linear-gradient(to left, #535C91,#2D3250)', // Grey to purple
        'grey-to-purple-up': 'linear-gradient(to left, #758195,#2D3250)'
        
        
      },
      fontFamily: {
        sign: ['Patrick Hand', 'sans-serif']
      },
      screens:{
        iphoneSe:'360px'
      }
    }
  },
  plugins: [],
};
