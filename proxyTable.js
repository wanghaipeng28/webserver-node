/**
 * Created by Nantian on 2018/7/2.
 */
module.exports = {
  '/nantian-sdn/nw/integration': {//�����ϴ�����ӿ�
    target: 'http://10.12.248.14',
    changeOrigin: true,
    pathRewrite: {
      '^/nantian-sdn/nw/file': '/nantian-sdn/nw/integration'
    }
  },
  '/nantian-sdn/nw/ip': {//�����ϴ�����ӿ�
    target: 'http://10.12.248.14',
    changeOrigin: true,
    pathRewrite: {
      '^/nantian-sdn/nw/file': '/nantian-sdn/nw/ip'
    }
  },
  '/nantian-sdn/nw/southservice': {//�����ϴ�����ӿ�
    target: 'http://10.12.248.11:8092',
    changeOrigin: true,
    pathRewrite: {
      '^/nantian-sdn/nw/southservice': '/nantian-sdn/nw/southservice'
    }
  },
  /*��̬�ļ�Ŀ¼����*/
  '/': "E:/nantian-sdn-web/dist"
};