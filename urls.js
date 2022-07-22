var build = require('./main/build');
var proxy = require('./main/proxy-table');

module.exports = {
  "/build/get-status": build.getStatus,
  "/build/start": build.build,
  "/build/reset-status": build.resetStatus,
  "/build/proxy/get-proxy-list": proxy.getProxyList,
  "/build/proxy/create-update-proxy-item": proxy.createUpdate,
  "/build/proxy/delete-proxy-item": proxy.deleteProxy
};