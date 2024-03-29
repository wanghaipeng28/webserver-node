var fs = require('fs');
var url = require('url');

/*当前路径*/
var curPath = process.argv[1].slice(0,-8);
var restartServer = require('./restart-server.js');

function returnResponse (res, response, flag) {
  flag && restartServer();
  response.writeHead(200, {
    "Content-Type": "application/json;charset=UTF-8",
    "Server": "node-http-server-v1.2"
  });
  response.write(JSON.stringify(res)); //输出响应主体
  response.end();
}

module.exports = {
  getProxyList(request, response, server) {
    let res;
    if(request.method == "GET"){
      res = server.proxyTable;
    }else{
      res = {
        errMsg:"only support get method",
        status:"500"
      };
    }
    returnResponse(res, response);
  },

  createUpdate(request, response, server) {
    let res;
    if(request.method == "POST"){
      var str="";
      request.on("data",function(chunk){
        str+=chunk;
      });
      request.on("end",function(){
        var proxyList, paramData, source;
        proxyList = server.proxyTable;
        paramData = JSON.parse(str);
        source = paramData.source;
		let addFlag = true
        proxyList.forEach(item => {
          if (item.source === source) {
            addFlag = false;
            item.pathRewrite = paramData.pathRewrite;
            item.target = paramData.target
          }
		});
		if (addFlag) {
          proxyList.unshift(paramData)
		}
        fs.writeFileSync(curPath + 'config/proxyTable.json',JSON.stringify(proxyList));
        res = {
          data: proxyList,
          status: "200"
        };
        returnResponse(res, response, true);
      });
    }else{
      res = {
        errMsg:"only support post method",
        status:"500"
      };
      returnResponse(res, response);
    }
  },

  deleteProxy(request, response, server) {
    var res;
    if(request.method == "GET") {
      var proxyList, key;
      proxyList = server.proxyTable;
      key = request.query.key;
	  let index = false
      for(let i = 0; i < proxyList.length; i++) {
	    const item = proxyList[i]
		if (item.source === key) {
		  index = i
		}
	  }
      if(index !== false){
        proxyList.splice(index, 1);
        fs.writeFileSync(curPath + 'config/proxyTable.json',JSON.stringify(proxyList));
        res = {
          data: proxyList,
          status: "200"
        };
      }else{
        res = {
          errMsg:"未找到该条目",
          status:"500"
        };
      }
    }else{
      res = {
        errMsg:"only support get method",
        status:"500"
      };
    }
    returnResponse(res, response, true);
  }
};