const path = require('path')
const list = require('./src/mock/list.json');
const userInfo = require('./src/mock/user.json');
module.exports = {
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
