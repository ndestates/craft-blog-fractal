module.exports = {
  content: ["components/**/*.twig", "layouts/**/*.twig", "docs/**/*.twig"],
  theme: {
    typography: {
      default: {
        css: {
          color: '#333',
          a: {
            'text-decoration': 'none',
            color: '#cccccc',
            '&:hover': {
              color: '#2c5282',
            },
          },
          'article-title': {
            'font-weight': 100,
            'margin-bottom': 0,
          },
        },
      },
    },
    fontFamily: {
      sans: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['Poppins', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif']
    },
    
      extend: {
        colors: {
          'nd-light-blue': {
            100: '#F0F9FB',
            200: '#C7E7F1',
            300: '#9FD6E6',
            400: '#76C4DC',
            500: '#4EB3D1',
            600: '#319CBB',
            700: '#267A93',
            800: '#1C586A',
            900: '#113742'
          },
          'nd-dark-blue': {
            100: '#62B0FE',
            200: '#49A3FD',
            300: '#1689FD',
            400: '#0270DE',
            500: '#013D79',
            600: '#0156AC',
            700: '#012346',
            800: '#000A14',
            900: '#000A10'
          },
          'nd-text': '#838383',
          'nd-text-light': '#c3c3c3',
          'nd-text-dark': '#575757',
          'nd-grey': {
            light: '#f7f7f7',
            DEFAULT: '#f4f4f4'
          }
        },
      
    },
  },
  variants: {},
  plugins: [
    require('/*  */@tailwindcss/typography')
  ],
}