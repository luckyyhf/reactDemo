var path=require('path');
module.exports={
	entry:'./entry.js',
	output:{
		filename:'bundle.js'
	},
	resole:{
		extensions:['','.js','.jsx']
	},
	module:{
		loaders:[
           {test:/\.jsx?$/,loaders:['babel']}
		]
	}
}