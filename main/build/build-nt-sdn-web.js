/**
 * Created by Nantian on 2018/4/21.
 */

/*配置常量*/
const PROJECT_PASH = "/usr/local/nantian-sdn-web/"; //工程目录
const GIT_USER = "git"; //git 用户
const GIT_PWD = "git"; //git 密码
const PAGES = ["v1.0"]; //配置单页名称（目录名称）

/*用来定义构建次数*/
var buildNum = 0;

/**使用node子进程执行shell命令**/
var exec = require('child_process').exec;

/*从git下载代码*/
function startBuildPage(path="v1.0"){
  console.log("开始从git下载代码！");
  //git下载代码
  var ch = exec("git pull",
    {"cwd": PROJECT_PASH},
    function(error, stdout){
    if(error === null){
      console.log(stdout);
      console.log("代码下载完成！");

      /*开始构建生产环境代码*/
      if(path == "/all"){
        PAGES.forEach((item)=>{
          buildProductCode("/" + item);
        });
      }else{
        buildProductCode("/" + path);
      }

    }else{
      console.log("代码下载失败！");
      console.log(error);
    }
  });
}


function buildProductCode(path){
  buildNum++;
  console.log("开始构建" + path.slice(1) + "生产环境代码");
  exec("node build/build.js "+path,
    {"cwd": PROJECT_PASH},
    function(error, stdout){
      buildNum--;
      if(error === null){
        console.log(stdout);
        console.log(path.slice(1) + "代码构建完成！");
      }else{
        console.log(path.slice(1) + "代码构建失败！");
        console.log(error);
      }

      if(buildNum == 0){
        finallyOpt();
      }
    }
  );
}

/*最后操作（包括重启服务器）*/
function finallyOpt(){
  console.log("前端页面构建完成！！");
}

/*开始下载代码*/
module.exports =  startBuildPage;
