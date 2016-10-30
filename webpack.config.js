
module.exports = {
  entry: './src/main.js',

  output: {
   		path: './dist',
		  filename:'app.bundle.js'
  },
  watch:true,

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015' }
    ]
  }
};