# react-isomorphic
======================

基于react的同构项目

##运行：
1. 安装依赖 `npm install`
2. 执行启动 
	1. 开发模式 `script/dev`
	2. 编译打包 `script/build`
	3. 生产模式 `script/run`

##特性
1. 支持客服端渲染组件。在各自组件中添加如下代码：

		 statics: {
		    clientRender: true
		 },

2. 支持公共模板替换
	
		 <!--#header.html-->

3. 支持按需加载，在routes.js中添加如下代码：

		 const Index = (location, callback) => {
			 require.ensure([], require => {
				 callback(null, require('./handlers/Index/Index'))
			 }, 'index')
		 };

4. 如果浏览器端出现如下错误，请确实是否没有编译，导致服务端代码和客服端代码不一致

		Warning: React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server

##数据吐出中文计算问题

	var write = module.exports = (string, type, res) => {
		res.writeHead(200, {
			'Content-Length': Buffer.byteLength(string, 'utf8'),
			'Content-Type': type
		});
		res.write(string, 'UTF-8');
		res.end();
	};

	中Content-Length不能为string.length

##axios返回数据中文乱码问题
	responseText += chunk;会导致中文乱码 要使用 bufferHelper.concat(chunk);

参见http://www.infoq.com/cn/articles/nodejs-about-buffer