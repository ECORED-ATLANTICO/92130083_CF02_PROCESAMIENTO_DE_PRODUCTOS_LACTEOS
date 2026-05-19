const titulo = require('./src/config/titulo')

module.exports = {
  publicPath: '',
  devServer: {
    watchOptions: {
      poll: 1000, // usa polling en lugar de fsevents
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.sass"`,
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: [
            'legacy-js-api',
            'import',
            'global-builtin',
            'color-functions',
            'slash-div',
          ],
        },
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = titulo
      return args
    })
  },
}
