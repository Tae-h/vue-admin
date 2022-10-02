
module.exports = {
  runtimeCompiler: true,

  configureWebpack: {
    output: {
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].js'
    },
  },

  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    },
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires >= sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
    ],
  },

  transpileDependencies: [
    'vuetify'
  ]
}
