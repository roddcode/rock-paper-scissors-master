/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-scissors': 'hsl(39, 89%, 49%)',
        'gradient-paper': 'hsl(230, 89%, 62%)',
        'gradient-rock': 'hsl(349, 71%, 52%)',
        'gradient-lizard': 'hsl(261, 73%, 60%)',
        'cyan': 'hsl(189, 59%, 53%)',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'gradient-radial': 'hsl(214, 47%, 23%)',
        'gradient-radial-2': 'hsl(237, 49%, 15%)',
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
      },
  },
  plugins: [],
}
}