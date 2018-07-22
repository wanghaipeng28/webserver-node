/**
 * Created by Nantian on 2018/7/20.
 */

var build = require('./main/build');

module.exports = {
  "/build/get-status": build.getStatus,
  "/build/start": build.build,
  "/build/resetStatus": build.resetStatus
};