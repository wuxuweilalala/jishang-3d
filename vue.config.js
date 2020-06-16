const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave:false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src')).end();

    //引入svg插件 Start
    const dir = path.resolve(__dirname, 'src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
      .use('svgo-loader').loader('svgo-loader')
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录

    //自适应
    config.module
    .rule('scss')
    .oneOf('vue')
    .use('px2rem-loader')
    .loader('px2rem-loader')
    .before('postcss-loader')
    .options({ remUnit: 384, remPrecision: 8 })
    .end()
  }
};
