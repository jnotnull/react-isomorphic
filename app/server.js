var express = require('express');
var app = express();

//相对于启动目录
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/js', express.static(__dirname + '/../public/js/'));
app.use('/images', express.static(__dirname + '/../public/images/'));

// 引入系统库
var fs = require('fs');
var _ = require('underscore');
var uuid = require('uuid');
var Cookies = require('cookies');
var React = require('react');
var {
  renderToString
} = require('react-dom/server');
var {
  match,
  RouterContext
} = require('react-router');

// 引入自定义库
var fetchData = require('./utils/fetchData');
var cache = require('./utils/cache');
var routes = require('./routes.js');
var {
  templateMap,
  commonHtml
} = require('./config');

// pass parameter to routerContext
function createElementFn(data) {
  return function(Component, props) {
    return <Component {...data} {...props} />
  }
}

// 替换公共模板
function replaceCommonTemplate(output) {
  _.each(commonHtml, function(name) {
    if (output.indexOf('<!--#' + name + '.html-->') > -1) {
      output = output.replace('<!--#' + name + '.html-->', commontmpls[name]);
    }
  });

  return output;
}

// app router
function renderApp(token, props, res) {

  var htmlRegex = /¡HTML!/;
  var dataRegex = /¡DATA!/;

  if (props.components[1].clientRender) {
    var pathname = props.routes[1].path;

    var output = tmplcache[pathname];

    output = replaceCommonTemplate(output);

    res.status(200).send(output);
  } else {

    fetchData(token, props).then((data) => {

      var clientHandoff = {
        token,
        data: cache.clean(token)
      };

      var pathname = props.routes[0].path;
      var currentRouteData = {
        "data": data[pathname],
        "query": pathname
      };

      var html = renderToString(<RouterContext {...props} createElement={createElementFn(currentRouteData)} />);

      var output = tmplcache[pathname].replace(htmlRegex, html).replace(dataRegex, JSON.stringify(clientHandoff));

      output = replaceCommonTemplate(output);

      res.status(200).send(output);
    })
  }
}

// 接受请求
app.get(/([\s\S]+)$/, response);
app.post(/([\s\S]+)$/, response);

function response(req, res, count) {

  var cookies = new Cookies(req, res);
  var token = cookies.get('token') || uuid();
  cookies.set('token', token, {
    maxAge: 30 * 24 * 60 * 60
  });

  match({
    routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      renderApp(token, renderProps, res);
    } else {
      res.status(404).send('Not found')
    }
  })
}

// 读取公共文件
var commontmpls = {};
_.each(commonHtml, function(name) {
  commontmpls[name] = fs.readFileSync(__dirname + '/templates/common/' + name + '.html', 'utf-8');
});

// 缓存模板
var tmplcache = {};

function cachePagetmpl(path, schema) {
  fs.readFile(__dirname + path, 'utf-8', function(err, body) {
    if (err) {
      setTimeout(function() {
        cachePagetmpl(path);
      }, 0)
    } else {
      tmplcache[schema] = body;
    }
  });
}
_.each(templateMap, function(path, schema) {
  cachePagetmpl(path, schema);
});

// 启动应用
app.listen(process.env.PORT || 5000);
console.log('✅  app started on port ' + (process.env.PORT || 5000));