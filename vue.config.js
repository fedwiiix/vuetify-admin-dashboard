module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      return {
        devServer: {
          proxy: {
            '/api/': {
              target: 'http://localhost:8000/api/'
            }
          }
        }
      }
    }
  }
}
