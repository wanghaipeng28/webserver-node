/**
 * Created by Nantian on 2018/7/21.
 */

var startBuildPage = require("./build-nt-sdn-web.js");

module.exports = function(request, response) {
  setTimeout(()=>{
    startBuildPage();
  },10);
  response.statusCode = 200;
  response.write("һ��ʼ���¹���ǰ�˴��룡�Եȡ�����"); //�����Ӧ����
  response.end();
};