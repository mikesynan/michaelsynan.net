/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    important: true,
    theme: {
      colors: {
        darkcyan2: "#008b8b",
        cyan: "#dbfcff",
        darkcyan: "#BCCADC",
        red: "#972D07",
        opal: "#C5D8D1",
        pink: "#ee6c4d",
        blue: "#7f96ff",
        white: "#ffffff",
        black: "#000000"
      },
      fontFamily: {
        display: ['Gilroy', 'sans-serif'],
        body: ['Graphik', 'sans-serif'],
      },
      extend: {
        margin: {
          '96': '24rem',
          '128': '32rem',
        },
      }
    },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
