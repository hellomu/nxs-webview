const path = require('path')
const list = require('./src/mock/list.json');
const userInfo = require('./src/mock/user.json');
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '我的消费券'
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'development' ? './': '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [// 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
        path.resolve(__dirname, './src/assets/less/var.less')
      ]
    }
  },
  devServer: {
    host:"0.0.0.0",
		proxy: {
			"/": {
				target: "https://white.natapp4.cc",
				changeOrigin: true,
				pathRewrite: {
					"^/": ""
				},
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/public/index.html";
          }
        }
			}
		},
    before(app){
      app.get('/goods/list',(req,res,next)=>{
        res.json(list);
      })
      app.get('/user/info',(req,res,next)=>{
        res.json(userInfo);
      })
    }
  }
}
