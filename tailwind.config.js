module.exports = {
  plugins: [require('daisyui')],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        primary: {
          primary: '#0804f6',
          'primary-content': '#fbfff2',
          secondary: '#050806',
          accent: '#37cdbe',
          neutral: '#fbfff2',
          'base-100': '#f1f2f3',
          // "light": "#ffffff",
          // "onLight": "#050806",
          // "dark": "#000000",
          // "onDark": "#FBFFF2",
          // "primary": "#0804F6",
          // "onPrimary": "#FBFFF2",
          // "secondary": "#FE491F",
          // "onSecondary": "#050806",
          // "complementary": "#565862",
          // "onComplementary": "#FBFFF2",
          // "fontBody": "fontPrimary",
        },
        light: {
          primary: '#0804F6',
          'primary-content': '#565862',
          secondary: '#FE491F',
          accent: '#37cdbe',
          neutral: '#fbfff2',
          'base-100': '#f1f2f3',
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]

    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
};
