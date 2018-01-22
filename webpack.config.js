var path=require("path");
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
//var webpack = require("webpack");


module.exports = {
    devtool: 'cheap-module-source-map',
    entry:{
      index:path.resolve(__dirname, "./src/index.js")
    },
    output:{
      path:path.resolve(__dirname, "./www/js/"),
		  filename:"index.js",
		//library:'oycad',
		  libraryTarget: 'umd',
		  chunkFilename:"[name].[chunkhash:5].min.js",
		  publicPath:"./www/"
    },
    module : {
      loaders: [
        { 
          test   : /\.js$|.jsx$/,
          loader : 'babel-loader',
			    query:{
          	presets: ['es2015', 'react','stage-2'],
/*            plugins: [
              ['dynamic-import-webpack']
            ]  */
          }
		    },
		    {
			    test: /\.css$/,
			    loader: 'style!css'
		    }
	    ],

    },
    watch : false,

    externals:{
		  react: {
	    	root:'React',
	    	commonjs2:'react',
	    	commonjs: 'react',
	    	amd: 'react',
			  umd: 'react'
		  },
			
		  'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
			  umd: 'react-dom'
      },
			
		  'react-redux':{
			  root: 'ReactRedux',
			  commonjs2: 'react-redux',
			  commonjs: 'react-redux',
			  amd: 'react-redux'
		  },
/*		  'rc-menu':{
			  root: 'rc-menu',
			  commonjs2: 'rc-menu',
			  commonjs: 'rc-menu',
			  amd: 'rc-menu'
		  },	*/
		  redux: {
			  root: 'Redux',
			  commonjs2: 'redux',
			  commonjs: 'redux',
			  amd: 'redux'
		  },
		  three:{
			  root:'THREE',
			  commonjs2: 'three',
			  commonjs: 'three',
			  amd: 'three'
		  },
    },

  	resolve: {
		  extensions: ['.js','.jsx','.css'],
	  },

/*    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]*/
/*    plugins:[
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
*/

};
