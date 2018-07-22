/**
 * Created by Nantian on 2018/7/21.
 */

var startBuildPage = require("./build-nt-sdn-web.js");

module.exports = {
  build(request, response, server) {
    server.status = "started";
    setTimeout(()=> {
      startBuildPage("v1.0",server);
    }, 10);

    response.writeHead(200, {
      "Content-Type": "application/json;charset=UTF-8",
      "Server": "node-http-server-v1.1"
    });
    response.write("{\"status\": \"started\"}"); //输出响应主体
    response.end();
  },

  getStatus(request, response, server) {
    response.writeHead(200, {
      "Content-Type": "application/json;charset=UTF-8",
      "Server": "node-http-server-v1.1"
    });
    response.write("{\"status\": \""+server.status+"\"}"); //输出响应主体
    response.end();
  },

  resetStatus(request, response, server) {
    server.status = "null";
    response.writeHead(200, {
      "Content-Type": "application/json;charset=UTF-8",
      "Server": "node-http-server-v1.1"
    });
    response.write("{\"status\": \""+server.status+"\"}"); //输出响应主体
    response.end();
  }
};
