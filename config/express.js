var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use ('/public', express.static('public'));
app.use('/stylesheets',express.static(__dirname +'/stylesheets'));

module. exports = function() {
    return app;
}