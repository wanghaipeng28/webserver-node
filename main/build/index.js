/**
 * Created by Nantian on 2018/7/21.
 */

var startBuildPage = require("./build-nt-sdn-web.js");

module.exports = function(request, response) {
  setTimeout(()=>{
    startBuildPage();
  },10);
  response.statusCode = 200;
  response.write("一开始重新构建前端代码！稍等。。。"); //输出响应主体
  response.end();
};