/**
 * Created by Nantian on 2018/8/5.
 */

var fs = require('fs');
var url = require('url');
/*当前路径*/
var curPath = process.argv[1].slice(0,-8);

module.exports = {
  getProxyList(request, response) {
    var res;
    if(request.method == "GET"){
      var content = fs.readFileSync(curPath + 'config/proxyTable.json');
      res = content.toString();
    }else{
      res = '{"errMsg":"only support get method","status":"500"}';
    }
    response.writeHead(200, {
      "Content-Type": "application/json;charset=UTF-8",
      "Server": "node-http-server-v1.2"
    });
    response.write(res); //输出响应主体
    response.end();
  }
};