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

var server = {
  proxyMiddleware: "",
  urlModel: "",
  fs: "",
  urls: "",
  port: "",
  app: "",
  /*初始化*/
  init() {
    var express = require('express');
    this.proxyMiddleware = require('http-proxy-middleware');
    this.urlModel = require('url');
    this.fs = require('fs');
    this.urls = require('./urls.js');
    this.port = process.argv[2] || 80;
    this.app = express();
    this.getProxyTable();
  },

  /*获取代理表*/
  getProxyTable() {
    var content, data, proxyTable = {};
    content = this.fs.readFileSync('./config/proxyTable.json'),data;
    data = JSON.parse(content.toString());
    data.forEach(item=> {
      var temObj = {};
      temObj["^"+item.source] = item.pathRewrite;
      proxyTable[item.source] = {
        target: item.target,
        changeOrigin: true,
        pathRewrite: temObj
      };
      temObj = null;
    });
    proxyTable["/"] = "/usr/local/nantian-sdn-web/dist";
    this.startServer(proxyTable);
    proxyTable = null;
    data = null;
    content = null;
  },

  /*启动服务*/
  startServer(proxyTable) {
    Object.keys(proxyTable).forEach((context)=>{
      var options = proxyTable[context];
      if (typeof options === 'string') {
        options = {target: options}
      }
      if (context == "/") {
        this.app.use(context, (request, response)=>{
          var urlInfo = this.urlModel.parse(request.url),
            fileName = urlInfo.pathname,
            fun = this.urls[fileName];
          if (fun) {
            fun(request, response);
          } else {
            var reg = /\.(jpg|png|html|css|js|woff2)$/;
            if (!reg.test(fileName)) {
              fileName += fileName.slice(-1) == "/" ? "index.html" : "/index.html";
            }
            fileName = options.target + fileName;
            //2 读取客户端请求的文件的内容
            this.fs.readFile(fileName, (err, data)=>{
              if (err) {
                response.statusCode = 404;
                response.end();
              } else {
                response.statusCode = 200;
                //response.setHeader('Content-Type', 'text/html');
                response.write(data); //输出响应主体
                response.end();
              }
            });
          }
        });
      } else {
        this.app.use(this.proxyMiddleware(options.filter || context, options));
      }
    });

    this.app.listen(this.port, ()=> {
      console.log("> Listening at http://localhost:" + this.port);
    });
  }
};

server.init();