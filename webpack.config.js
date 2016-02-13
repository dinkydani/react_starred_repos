// By default, React will be in development mode, which is slower, and not advised for production.
// To use React in production mode, set the environment variable NODE_ENV to production
// new webpack.DefinePlugin({
//   'process.env': {
//     // NODE_ENV: JSON.stringify('production')
//   }
// });

module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js', // this is the default name, so you can skip it
    // at this directory our bundle file will be available
    // make sure port 8090 is used when launching webpack-dev-server
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loaders: ['style', 'css']
      //   // include: PATHS.app
      // },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel'
        // query: {
        //   presets: ['react', 'es2015']
        // }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
