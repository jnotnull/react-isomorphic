/**
 * @fileoverview Program entry
 * @author wliao <wliao@Ctrip.com>
 * @example
 * production: node app
 * developmet: grunt app or grunt app --debug
 */
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
  require('./server.js');
}