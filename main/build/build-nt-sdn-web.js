/*配置常量*/

const GIT_USER = "git"; //git 用户
const GIT_PWD = "git"; //git 密码

/*当前路径*/
var curPath = process.argv[1].slice(0,-8);


var serverApp = null,step,date,time;

/**使用node子进程执行shell命令**/
var exec = require('child_process').exec;

/*从git下载代码*/
function startBuildPage(path, server){
  serverApp = server;
  step = "开始从git下载代码！";
  date = new Date();
  time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  console.log(step,time);
  serverApp.steps.push({
        msg: step,
        type: "success",
        time
  });

  let fullPath = serverApp.pageConfig[path].path;
  //git下载代码
  var ch = exec("git pull",
    {"cwd": fullPath},
    function(error, stdout){
    if(error === null){
      console.log(stdout);
      step = "代码下载完成！";
      date = new Date();
      time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
      console.log(step,time);
      serverApp.steps.push({
        msg: step,
        type: "success",
        time
      });

      /*开始构建生产环境代码*/
      buildProductCode(path, fullPath);

    }else{
      step = "代码下载失败！";
      serverApp.status = "null";
      date = new Date();
      time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
      console.log(step,time);
      serverApp.steps.push({
        msg: step,
        type: "danger",
        time
      });
      console.log(error);
    }
  });
}


function buildProductCode(path, fullPath){
  step = "开始构建" + path.slice(1) + "生产环境代码";
  date = new Date();
  time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  console.log(step,time);
  serverApp.steps.push({
    msg: step,
    type: "success",
    time
  });
  exec("npm run build",
    {"cwd": fullPath},
    function(error, stdout){
      if(error === null){
        console.log(stdout);
        step = path.slice(1) + "代码构建完成！";
        date = new Date();
        time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        console.log(step,time);
        serverApp.steps.push({
          msg: step,
          type: "success",
          time
        });
		finallyOpt();
      }else{
        serverApp.status = "null";
        step = path.slice(1) + "代码构建失败！";
        date = new Date();
        time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        console.log(step,time);
        serverApp.steps.push({
          msg: step,
          type: "danger",
          time
        });
        console.log(error);
      }
    }
  );
}

/*最后操作（包括重启服务器）*/
function finallyOpt(){
  step = "前端页面构建完成！！";
  time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  serverApp.status = "null";
  console.log(step,time);
  var type = "success";
  serverApp.steps.push({
    msg: step,
    type,
    time
  });
  return;
  exec("./update.sh",
    {"cwd": curPath+"shell/"},
    function(error, stdout){
      serverApp.status = "null";
      date = new Date();
      time = date.toLocaleDateString() + " " + date.toLocaleTimeString();
      var type = "success";
	  console.log(error)
      if(error === null){
        step = "前端页面构建完成！！";
      }else{
        step = "COPY代码发生错误";
        type = "danger";
      }
      console.log(step,time);
      serverApp.steps.push({
        msg: step,
        type,
        time
      });
    }
  );
}

/*开始下载代码*/
module.exports =  startBuildPage;
