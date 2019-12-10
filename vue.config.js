/* eslint-env node */
const path = require('path');
const appConfig = require('./src/app.config');

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  lintOnSave: true,
  runtimeCompiler: true,
  transpileDependencies: ['@phoenix/allura'],

  chainWebpack: config => {
    config.resolve.alias
      .set('@components', path.resolve(__dirname, 'src/components'))
      .set('@store', path.resolve(__dirname, 'src/store'))
      .set('@views', path.resolve(__dirname, 'src/views'));

    config.plugin('define').tap(definitions => {
      definitions[0]['process.env'] = Object.assign(definitions[0]['process.env'], { VERSION: `"${require('./package.json').version}"` });

      return definitions;
    });

    if (process.env.NODE_ENV && process.env.NODE_ENV !== 'production') {
      config.optimization.minimize(false);
      config.optimization.delete('minimizer');
    }
  },

  configureWebpack: () => {
    return {
      name: appConfig.title,
      externals: {
        BUILD_INFO: 'var BUILD_INFO'
      }
    };
  },

  productionSourceMap: false,

  css: {
    extract: true,
    sourceMap: false
  }

  // configure webpack-dev-server behavior
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
  //   proxy: null, // string | Object
  //   before: app => {}
  // },
};
