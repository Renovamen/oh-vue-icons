module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: './demo/dist',
  chainWebpack: config => {
    config
      .entry('app')
      .clear()
      .add('./demo/index.js')
  }
}
