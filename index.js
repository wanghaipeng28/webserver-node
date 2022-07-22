/**
 * 
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
  curPath: "",
  app: "",
  proxyTable: [],
  status: "null",
  steps: [],
  pageConfig: {},
  /*初始化*/
  init() {
    var express = require('express');
    this.proxyMiddleware = require('http-proxy-middleware');
    this.urlModel = require('url');
    this.fs = require('fs');
    this.urls = require('./urls.js');
    this.port = process.argv[2] || 8000;
    this.curPath = process.argv[1].slice(0,-8);
    this.app = express();
    this.loadPageConfig();
    this.getProxyTable();
  },

  /*获取页面配置信息*/
  loadPageConfig() {
    let content = this.fs.readFileSync(this.curPath + 'config/pages.json');
    this.pageConfig = JSON.parse(content.toString());
  },

  /*获取代理表*/
  getProxyTable() {
    var content, data, proxyTable = {};
    content = this.fs.readFileSync(this.curPath + 'config/proxyTable.json');
    this.proxyTable = JSON.parse(content.toString());
    this.proxyTable.forEach(item=> {
      var temObj = {};
      temObj["^"+item.source] = item.pathRewrite;
      proxyTable[item.source] = {
        target: item.target,
        changeOrigin: true,
        pathRewrite: temObj,
        secure: false
      };
      temObj = null;
    });
    proxyTable["/proxy-config"] = "/code/webserver-node/page";
    proxyTable["/"] = "/code/webserver-node/app";
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
      if (context == "/proxy-config" || context === '/') {
        this.app.use(context, (request, response)=>{
          var urlInfo = this.urlModel.parse(request.url),
            fileName = urlInfo.pathname,
            fun = this.urls[fileName];
          if (fun) {
            fun(request, response, this);
          } else {
            var reg = /\.(jpg|png|html|css|js|woff2|ico)$/;
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
