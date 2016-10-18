# react-isomorphic
======================

基于react的轻量级同构方案

##概要：
1. 放弃集成redux，比较适合逻辑简单、偏重于数据展示的应用;
2. 采用多个模板方式，结合react-router, 实现组件文件懒加载;
3. 支持先编译归档再运行，大大节省发布时候发布启动时间;
4. 集成了滑动banner和图片懒加载插件。

##运行：
1. 安装依赖 `npm install`
2. 执行启动 
	1. 开发模式 `script/dev`
	2. 编译打包 `script/build`
	3. 生产模式 `script/run`

##使用方法
1. 支持客户端渲染组件。在各自组件中添加如下代码：

		 statics: {
		    clientRender: true
		 },

2. 支持公共模板替换：
	
		 <!--#header.html-->

3. 支持按需加载，在routes.js中添加如下代码：

		 const Index = (location, callback) => {
			 require.ensure([], require => {
				 callback(null, require('./handlers/Index/Index'))
			 }, 'index')
		 };

4. 如果浏览器端出现如下错误，请确认是否没有编译，导致服务端代码和客服端代码不一致：

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