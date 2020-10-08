/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    important: true,
    theme: {
      fontFamily: {
        display: ['Gilroy', 'sans-serif'],
        body: ['Graphik', 'sans-serif'],
      },
      extend: {
        colors: {
          cyan: '#9cdbff',
          red: "#972D07",
        },
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
