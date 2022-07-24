module.exports = {
  purge:{
    enabled: true,
    content: ['./**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "strong-cyan": "#26baa4",
        "light-blue": "#6173ff",
        "dark-grayish-blue": "#4c545d",
        "grayish-blue": "#9fabb2",
        "light-white":"#e3ffff"
      },
      fontFamily:{
        "BaiJamjuree-SemiBold":['baijamjuree-semibold'],
        "BaiJamjuree-Regular":['baijamjuree-regular']
      },
      boxShadow:{
        "lg-custom":"0 8px 20px rgba(38, 186, 164, 0.4),0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      },
      backgroundImage:{
        "header-desktop":"url('../images/bg-header-desktop.png')",
        "header-mobile":"url('../images/bg-header-mobile.png')",
        "image-computer":"url('../images/image-computer.png')",
        "image-devices":"url('../images/image-devices.png')",
      },
      width:{
        "43":"43rem",
        "42":"42rem",
        "38":"38rem",
        "37":"37rem",
        "34":"34rem",
        "30":"30rem",
        "21":"21rem",
        "19p2":"19.2rem",
        "16p8":"16.8rem"
      },
      borderWidth:{
        "3":"3px"
      },
      height:{
        "42":"42rem",
        "37":"37rem"
      },
      fontSize:{
        "custom-4xl":"2.8rem"
      },
      lineHeight:{
        "12":"3rem"
      },
      flex:{
        "1":"1 1 0%",
        "2":"2 2 0%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}