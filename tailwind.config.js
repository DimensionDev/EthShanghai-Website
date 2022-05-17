module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        main: '#29036D',
        nav: '#1C014F',
        support: '#230062',
        helper: '#00FFC2',
        footer: '#1E0054',
      },
      height: {
        26: '6.5rem',
        200: '50rem',
        // card: 534,
      },
      width: {
        card: 368,
        width: {
          '3/10': '30%',
          '4/10': '40%',
        },
      },
      inset: {
        26: '6.5rem',
      },
      borderColor: {
        nav: '#00FFC2',
      },
      borderWidth: {
        6: '6px',
      },
      borderRadius: {
        '2.5xl': '18px',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/banner.png')",
        'hero-pattern-2x': "url('/images/banner_2x.png')",
        'speaker-master': 'linear-gradient(27.99deg, #00FFC2 0.33%, #406FFF 99.69%)',
        speaker: 'linear-gradient(27.99deg, #EB5EC8 0.33%, #00FFC2 99.69%)',
      },
      colors: {
        link: '#29036D',
      },
    },
  },
  plugins: [],
}
