/**
 * Created by Nantian on 2018/7/21.
 */

var startBuildPage = require("./build-nt-sdn-web.js");

module.exports = function(request, response) {
  setTimeout(()=>{
    startBuildPage();
  },10);
  response.writeHead(200, {
    "Content-Type": "application/json;charset=UTF-8",
    "Server": "node-http-server-v1.1"
  });
  response.write("已开始重新构建前端代码！稍等半分钟。。。"); //输出响应主体
  response.end();
};
