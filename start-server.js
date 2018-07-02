/**
 * Created by Nantian on 2018/7/2.
 * 参考代码======================
 * var express = require('express');
 * var request = require('request');
 * var app = express();
 * app.use('/', function(req, res) {
 *     var url = 'https://www.baidu.com/' + req.url;
 *     req.pipe(request(url)).pipe(res);
 * });
 * app.listen(process.env.PORT || 3000);
 */

var express = require('express');
/*url模块*/
var url = require('url');
/*文件服务*/
var fs = require('fs');

var proxyMiddleware = require('http-proxy-middleware');
/*引入代理表*/
var proxyTable = require('./proxyTable.js');

/*端口号设置*/
var port = process.argv[2] || 8000;

var app = express();

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context];
    if (typeof options === 'string') {
        options = {target: options}
    }
    if (context == "/") {
        app.use(context, function (request, response) {
            var urlInfo = url.parse(request.url);
            var fileName = urlInfo.pathname;
            fileName == "/" && (fileName = "/index.html");
            fileName = options.target + fileName;
            //2 读取客户端请求的文件的内容
            fs.readFile(fileName, function (err, data) {
                if (err) {
                    response.statusCode = 404;
                    response.end();
                } else {
                    response.statusCode = 200;
                    //response.setHeader('Content-Type', 'text/html');
                    response.write(data); //输出响应主体
                    response.end();
                }
            })
        });
    } else {
        app.use(proxyMiddleware(options.filter || context, options))
    }
});


app.listen(port, ()=>{
    console.log("> Listening at http://localhost:" + port);
});
