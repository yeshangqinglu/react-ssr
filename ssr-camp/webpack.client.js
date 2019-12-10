const path=require('path')
//服务端的webpack

module.exports={
    mode:"development",
    //客户端入口
    entry:"./client/index.js",
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                //才能支持import 支持jsx
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['@babel/preset-react',['@babel/preset-env']]
                }
            }
        ]
    }
}