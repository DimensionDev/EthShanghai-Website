module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        main: '#20005A',
        nav: '#1C014F',
        helper: '#00FFC2',
        footer: '#1E0054',
      },
      height: {
        26: '6.5rem',
        200: '50rem',
      },
      inset: {
        26: '6.5rem',
      },
      borderColor: {
        nav: '#00FFC2',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/banner.png')",
        'hero-pattern-2x': "url('/images/banner_2x.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
