/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors:{
      hoverColor: '#9e1c1c',
      activeColor: '#6c1216',
    }
    
  },
};
export const plugins = [require("daisyui")];