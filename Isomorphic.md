前言：这是一个基于react的轻量级同构方案，没有使用flux、redux。同时本框架支持多页应用，以使其拥有更大的使用范围。

##1. Define
##1. 同构的定义

[同构](http://baike.baidu.com/view/52009.htm)

同构的概念来源于数学，它用来描述两个结构的关系。我们来看下百度百科上的正式定义：同构是在数学对象之间定义的一类映射,它能揭示出在这些对象的属性或者操作之间存在的关系。若两个数学结构之间存在同构映射，那么这两个结构叫做是同构的。一般来说，如果忽略掉同构的对象的属性或操作的具体定义，单从结构上讲，同构的对象是完全等价的。

在这里我们使用同构描述的是客户端和服务端这两个结构。随着nodejs的流行，js已经能够在服务端大展手脚，如果一个js既能完成服务端的功能，又能完成客服端的功能，那将是一件非常美妙的事情。好在现在越来越多的框架已经支持这样的功能，react就是其中之一。

##2. Background
##2. 背景

1. [Universal React: You’re doing it wrong](http://jamesknelson.com/universal-react-youre-doing-it-wrong/)
2. [Should I use React Server-Side Rendering?](http://andrewhfarmer.com/server-side-render/)

在学习react同构之前，先分析下我们的应用是否需要同构。

1. 同构的第一个优势是能够支持搜索引擎的检索。如果你的应用需要被baidu,google检索到，那可以试一下
2. 

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
