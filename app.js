var app = require('./config/express')();
var rotasProdutos = require('./app/routes/home')(app);

app.listen(3000, function(){
  console.log("server start");
});
