/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  // https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
  content: ['*.html','./src/**/*.html','./**/*.html','./*.html'],
  theme: {
    extend: {
      colors: {
        "dark-jungle-green": "var(--dark-jungle-green)",
        "orange-soda": "var(--orange-soda)",
      },  
    },  
  },
  plugins: [],
}




