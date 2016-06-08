var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var express = require('express');
var app = express();
var hltvApi = require('hltv-api');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/upcoming-matches', function(req, res) {
  hltvApi.getUpcomingMatches.getData(function(matches) {
    res.json(matches);
  });
});

app.get('/api/hot-matches', function(req, res) {
  hltvApi.getHotMatches.getData(function(matches) {
    res.json(matches);
  });
});

app.get('/api/latest-news', function(req, res) {
  hltvApi.getLatestNews.getData(function(news) {
    res.json(news);
  });
});

app.get('/api/latest-blogs', function(req, res) {
  hltvApi.getLatestBlogs.getData(function(blogs) {
    res.json(blogs);
  });
});

app.get('/api/latest-demos', function(req, res) {
  hltvApi.getLatestDemos.getData(function(demos) {
    res.json(demos);
  });
});

app.listen(5000, function() {
  console.log('Listening on port 5000');
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
