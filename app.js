require('tingyun');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
	cluster.on('exit', function(worker, code, signal) {
		console.log('worker %d died (%s). restarting...',
			worker.process.pid, signal || code);
		cluster.fork();
	});
} else {
	require('node-jsx').install({
		harmony: true
	});
	require('./app/server');
}

// process.on('uncaughtException', function(err) {
// 	console.log("error in uncaughtException")
// 		//打印出错误
// 	console.log(err);
// 	//打印出错误的调用栈方便调试
// 	console.log(err.stack);
// });