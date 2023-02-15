/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**.html",
    "./src/**/*.{html,js}",
    "./src/Components/*.{html,js}",
    "./src/Components/Homescreen Comp/*.{html,js}",
    "./src/Components/TechShape/*.{html,js}",
    "./src/Projects/**.{html,js}",
    "./src/Pages/**.{html,js}",
    "./src/FamTree/**.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    backgroundImage: {
      'points': {radialGradient: 'rgba(255,255,255, 0.1) 9%', transparent: '9%' }
    },
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
      'fam': 'Noto Sans, sans-serif'
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
      }
    },
    extend: {
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
        baseRowGrid: 'minmax(70px, 10vh) minmax(700px, 70vh) minmax(300px, 40vh) 200px minmax(600px, 70vh) minmax(100px, 10vh)',
        baseRowGridOpen: 'minmax(70px, 10vh) minmax(700px, 70vh) minmax(300px, 40vh) 200px minmax(700px, 90vh) minmax(600px, 70vh) minmax(100px, 10vh)',
        //
        baseRowGridMobile:      '3vh minmax(550px, 70vh) 40px minmax(250px, 20vh) 40px 180px 40px minmax(670px, 70vh) 40px minmax(90px, 10vh)',
        baseRowGridMobileOpen:  '3vh minmax(550px, 75vh) 40px minmax(250px, 20vh) 40px 180px minmax(550px, 75vh) 40px minmax(670px, 70vh) 40px minmax(120px, 10vh)',

        homeScreenRows: 'minmax(170px, 30%) minmax(85px, 10%) minmax(360px, 60%)',
        homeScreenMobileRows: '120px 45px minmax(10px, 50px) minmax(400px, 45vh)',

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
        colorChange: {
          '0%, 100%': { color: '#778DA9' },
          '50': { color: '#0D1B2A' },
        },
        bounce: {
          '0%' :{
            transform: 'none', 
            height: '50px', width: '70px',
            height: '0px', width:'0px', borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderBottom: '30px solid black', 
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
            
          },
          '50%': {
              transform: 'translateY(-50%)',
              height: '0px', width:'0px', borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderBottom: '30px solid black', 
              animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          },
          '100%': {
            transform: 'none',
            height: '0px', width:'0px', borderLeft: '30px solid transparent', borderRight: '30px solid transparent', borderBottom: '30px solid black', 
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          }
        },
        blink: {
          '0%, 100%': { background: 'black'},
          '50%': { background: 'white' },
        },
      },
      animation: {
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
