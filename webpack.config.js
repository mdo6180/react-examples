const path = require('path')

module.exports = {
  // define entrypoint
  entry: "./src/index.tsx",
  
  // output to dist folder
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },

  // configure webpack to use ts-loader to load any .tsx files
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  // set webpack to automatically compile as soon as a change is made
  watch: true,

  // tells webpack to apply rules (defined above) to all files with .ts, .tsx, and .js extensions
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
}