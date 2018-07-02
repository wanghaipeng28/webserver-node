/**
 * Created by Nantian on 2018/7/2.
 */
module.exports = {
  '/nantian-sdn/nw/integration': {//测试上传代理接口
    target: 'http://10.12.248.14',
    changeOrigin: true,
    pathRewrite: {
      '^/nantian-sdn/nw/file': '/nantian-sdn/nw/integration'
    }
  },
  '/nantian-sdn/nw/ip': {//测试上传代理接口
    target: 'http://10.12.248.14',
    changeOrigin: true,
    pathRewrite: {
      '^/nantian-sdn/nw/file': '/nantian-sdn/nw/ip'
    }
  },
  '/nantian-sdn/nw/southservice': {//测试上传代理接口
    target: 'http://10.12.248.11:8092',
    changeOrigin: true,
    pathRewrite: {
      '^/nantian-sdn/nw/southservice': '/nantian-sdn/nw/southservice'
    }
  },
  /*静态文件目录设置*/
  '/': "/usr/local/nantian-sdn-web/dist"
};