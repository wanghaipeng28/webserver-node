/**
 * Created by Nantian on 2018/7/20.
 */

var build = require('./main/build');
var proxy = require('./main/proxy-table');

module.exports = {
  "/build/get-status": build.getStatus,
  "/build/start": build.build,
  "/build/reset-status": build.resetStatus,
  "/build/proxy/get-proxy-list": proxy.getProxyList
};