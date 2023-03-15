/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**.html",
    "./src/**/*.{html,js}",
    "./src/Components/*.{html,js}",
    "./src/Components/Homescreen Comp/*.{html,js}",
    "./src/Components/TechShape/*.{html,js}",
    "./src/Projects/**.{html,js}",
    "./src/Projects/Mike/**.{html,js,jpg}",
    "./src/Pages/**.{html,js}",
    "./src/FamTree/**.{html,js}",
    "./src/Three/**.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    // backgroundImage: {
    //   'points': {radialGradient: 'rgba(255,255,255, 0.1) 9%', transparent: '9%' }
    // },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      'header': 'Shadows Into Light, cursive',
      'body': 'Averia Gruesa Libre, cursive',
      'extra': 'Nunito Sans, sans-serif',
      'fam': 'Noto Sans, sans-serif',
      'Radbo': 'font-family Righteous, cursive'
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'grey': '#536878',
      'purple': {
        100: '#E0AAFF',
        200: '#C77DFF',
        300: '#9D4EDD',
        400: '#7B2CBF',
        500: '#5A189A',
        600: '#3C096C',
        700: '#240046',
        800: '#10002B'
      },
      'blueGrey': {
        100: '#E0E1DD',
        300: '#778DA9',
        500: '#415A77',
        700: '#1B263B',
        900: '#0D1B2A',
      },
      'fam': {
        'background': '#E0FBFC',
        'color': '#293241',
        'elements': '#98C1D9',
        'sub': '#3D5A80',
        'buttonsColor': '#EE6C4D'
      },
      'mike': {
        'bgLight': '#ffffff',
        'backgroundDark': '#111111',
        'fontLight': '#ffffff',
        'fontDark': '#111111'
      },
    },
    extend: {
      backgroundImage: {
        'articaleOne': "url('../src/Projects/Mike/images/articaleOne.jpg')",
        'articaleTwo': "url('../src/Projects/Mike/images/articaleTwo.jpg')",
        'articaleThree': "url('../src/Projects/Mike/images/articaleThree.jpg')",
        'articaleFour': "url('../src/Projects/Mike/images/articaleFour.jpg')",
      },
      content: {
        some: 'Hello',
      },
      gridTemplateColumns: {
        baseColGrid: '5vh 1fr 5vh',
        baseColGridMobile: '3vh minmax(310px, 1fr) 3vh',
        projectCompCols: '15vw 25vw 40vw',
        sudCols: 'repeat(9, 1fr)'
      },
      gridTemplateRows: {
        baseRowGrid:          'minmax(70px, 10vh) minmax(780px, 100vh) minmax(300px, 40vh) 250px minmax(600px, 70vh) minmax(100px, 10vh) 10px',
        baseRowGridOpen:      'minmax(70px, 10vh) minmax(780px, 100vh) minmax(300px, 40vh) 250px minmax(700px, 90vh) minmax(600px, 70vh) minmax(100px, 10vh) 10px',
        //
        baseRowGridMobile:      '3vh minmax(850px, 110vh) 40px minmax(250px, 20vh) 40px 200px 40px minmax(670px, 70vh) 40px minmax(90px, 10vh) 5px',
        baseRowGridMobileOpen:  '3vh minmax(700px, 110vh) 40px minmax(250px, 20vh) 40px 200px minmax(550px, 75vh) 40px minmax(670px, 70vh) 40px minmax(120px, 10vh) 5px',

        homeScreenRows: '25% 10% 60%',
        homeScreenMobileRows: '250px minmax(10px, 50px) minmax(320px, 50%)',

        projectCompRows: '10vh',
        projectCompRowsMobile: '5% 20% 75%',
        sudRows: 'repeat(9, 1fr)'
      },
      rotate: {
        '15': '25deg',
        '35': '35deg',
        '40': '40deg',
        '50': '50deg'
      },
      height: {
        '1': '1px',
        '2px': '2px',
        '10px': '10px',
        '20px': '20px',
        '34px': '34px',
        '55px': '55px',
        '77px': '77px',
        '110px': '110px',
        '250px': '250px',
        '300px': '300px',
        '440px': '440px',
        'proHeight': '700px',
        'proHeightMobile': '450px',
        'calcHeight': '630px',
        'XOHeight': '550px',
        'SudHieght': '550px'
      },
      width: {
        '10px': '10px',
        '20px': '20px',
        '34px': '34px',
        '42px': '42px',
        '50px': '50px',
        '55px': '55px',
        '70px': '70px',
        '77px': '77px',
        '100px': '100px',
        '250px': '250px',
        '315px': '315px',
        'proWidthMobile': '300px',
        'proWidth': '492px',
        '440px': '440px',
        'calcWidth': '350px',
        'XOWidth': '350px',
        'SudWidth': '370px'
      },
      margin: {
        '50px': '50px'
      },
      translate: {
        '25px': '25px',
        '26px': '26px',
        '50px': '50px',
        '65px': '65px',
        '75px': '75px',
        '100px': '100px'
      },
      keyframes: {
        magicSpan: {
          'from': { backgroundPosition: '0% center' },
          'to': { backgroundPosition: '-200% center'}
        },
        slide: {
          '0%': {transform: 'translateY(100%)'},
          '100%':{ transform: 'translateY(0%)'}
        },
        rotate4 : {
          '100%': { transform: 'rotate(90deg)' }
        },
        projectDisplayAnimation: {
          '0%': {
            boxShadow: 'none',
          },
          '100%': {
            boxShadow: '20px 10px 40px #0f1520, -20px -20px 60px #273756',

          },
        },
        projectDisplayAnimationLight: {
          '0%': {
            boxShadow: 'none',
          },
          '100%': {
            boxShadow: '20px 10px 40px #0f1520, -20px -20px 60px #778DA9',

          },
        },
        colorChange: {
          '0%, 100%': { color: '#778DA9' },
          '50': { color: '#0D1B2A' },
        },
        blink: {
          '0%, 100%': { background: 'black'},
          '50%': { background: 'white' },
        },
      },
      animation: {
        magicText: 'magicSpan 3s linear infinite',
        slideElement: 'slide 1s linear',
        rotate4: 'rotate4 1s linear forwards',
        projectAnimation: 'projectDisplayAnimation 1s ease-in-out forwards',
        blinker: 'blink 1s linear forwards infinite',
        colorChange: 'colorChange 2s linear'
      },
      boxShadow: {
          'boxShadow': '20px 20px 60px #0f1520, -20px -20px 60px #273756'
      },
    },
  },
  plugins: [],
}
