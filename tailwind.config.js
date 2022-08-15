/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  // https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
  content: ['*.html','./src/**/*.html','./**/*.html','./*.html'],
  theme: {
    extend: {
      colors: {
        "dark-jungle-green": "var(--dark-jungle-green)",
        "prussian-blue": "var(--prussian-blue)",
        "raisin-black-1": "var(--raisin-black-1)",
        "raisin-black-2": "var(--raisin-black-2)",
        "yellow-green": "var(--yellow-green)",
        "orange-soda": "var(--orange-soda)",
        "cultured-1": "var(--cultured-1)",
        "cultured-2": "var(--cultured-2)",
        "misty-rose": "var(--misty-rose)",               
        "alice-blue": "var(--alice-blue)",
        "seashell": "var (--seashell)",
        "cadet": "var(--cadet)",
        "white": "var(--white)",
        "black": "var(--black)",
        "opal": "var(--opal)",
      },  
    },
    fontFamily: {
      'ff-nunito-sans': ["Nunito Sans", "sans-serif"],
      'ff-poppins': ["Poppins", "sans-serif"]
    },
    fontSize: {
      'fs-1': '1.875rem',
      'fs-2': '1.5rem',
      'fs-3': '1.375rem',
      'fs-4': '1.125rem',
      'fs-5': '0.875rem',
      'fs-6': '0.813rem',
      'fs-7': '0.75rem'
    },
    fontWeight: {
      fw500: 500,
      fw600: 600,
      fw700: 700
    }

  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}




