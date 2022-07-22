
/**使用node子进程执行shell命令**/
var exec = require('child_process').exec;

/*当前路径*/
var mainFile = process.argv[1];

module.exports = function() {
  exec("forever restart " + mainFile);
};