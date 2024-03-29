/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens:{

     sm:'480px',
     md:'768px',
     lg:'976px',
     xl:'1440px'

    },

   extend: {

       colors:{

          navBackgrndColor:'#007075',
          brightRedLight:'hsl(12,88%,69%)',
          brightRedSupLight:'hsl(12,88%,95%)',
          darkBlue:'hsl(228,39%,23%)',
          darkGreyishBlue:'hsl(227,12%,61%)',
          veryDarkBlue:'hsl(223,12%,13%)',
          veryPaleRed:'hsl(13,100%,96%)',
          veryLightGray:'hsl(0,0%,98%)',
          subFooter:'#2a2a2a',
          mainFooter:'#4d4d4d'


       }

   },
 },
 plugins: [],
}

