/**
 * Created by Nantian on 2018/7/21.
 */

var startBuildPage = require("./build-nt-sdn-web.js");

module.exports = {
  build(request, response, server) {
    server.status = "started";
    var date = new Date();
    var time = date.toLocaleDateString() + " " + date.toTimeString();
    server.steps = [
      {
        msg: "正在启动构建程序！",
        type: "success",
        time
      }
    ];
    setTimeout(()=> {
      startBuildPage("v1.0",server);
    }, 500);

    response.writeHead(200, {
      "Content-Type": "application/json;charset=UTF-8",
      "Server": "node-http-server-v1.1"
    });
    var data = {
      status: server.status,
      steps: server.steps
    };
    response.write(JSON.stringify(data)); //输出响应主体
    response.end();
  },

  getStatus(request, response, server) {
    response.writeHead(200, {
      "Content-Type": "application/json;charset=UTF-8",
      "Server": "node-http-server-v1.1"
    });
    var data = {
      status: server.status,
      steps: server.steps
    };
    response.write(JSON.stringify(data)); //输出响应主体
    response.end();
  },

  resetStatus(request, response, server) {
    server.status = "null";
    server.steps = [];
    response.writeHead(200, {
      "Content-Type": "application/json;charset=UTF-8",
      "Server": "node-http-server-v1.1"
    });
    response.write("{\"status\": \""+server.status+"\"}"); //输出响应主体
    response.end();
  }
};
