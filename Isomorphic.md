##1. Define

[同构](http://baike.baidu.com/view/52009.htm)

##2. Background

1. [Universal React: You’re doing it wrong](http://jamesknelson.com/universal-react-youre-doing-it-wrong/)
2. [Should I use React Server-Side Rendering?](http://andrewhfarmer.com/server-side-render/)

##3. Isomorphic Javascript Benefits:
1. Better overall user experience
2. Search engine indexable
3. Easier code maintenance
4. Free progressive enhancements

##4. What parts of your app should be isomorphic：
1. Isomorphic view
2. Isomorphic styles
3. Isomorphic routing
4. Isomorphic data fetching
5. Isomorphic configuration
6. Isomorphic localization

##5. renderToString Performance

1. [React renderToString() Performance and Caching React Components](http://stackoverflow.com/questions/34728962/react-rendertostring-performance-and-caching-react-components)
2. [Server Side Rendering Performance with renderToString](https://groups.google.com/forum/#!topic/reactjs/O_m6f4T0ytQ)

##6. Performance Test with AB

    ab -n1000 -c100 http://localhost:5000/index

ab数据分析： [Apache Benchmark 的使用的个人浅薄经验](https://ruby-china.org/topics/13870)

##7. Performance Data Overview
	
	听云（15天免费） https://report.tingyun.com/server/application/132824/overview

##8. Exception Dealing

1. [Node 出现 uncaughtException 之后的优雅退出方案](http://www.infoq.com/cn/articles/quit-scheme-of-node-uncaughtexception-emergence)
2. [NodeJS服务总是崩溃的解决办法](http://www.lai18.com/content/2165774.html)
3. [Express 框架中对错误的统一处理](http://itbilu.com/nodejs/npm/41ctyLryW.html)

##9. A/B Test

1. [react-alt-abtest](https://github.com/gangstertim/react-alt-abtest)
2. [A/B Testing React Components](https://github.com/pushtell/react-ab-test)
