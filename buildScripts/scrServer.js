import express from "express"
import  path from "path"
import open from "open"
import webpack from 'webpack'
import config from '../webpack.config.dev'

/*eslint-disable  no-console*/
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')( compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/users', function(req,res){
  res.json([
    {"id":1,"firsName":"Bob1","lastName":"Smith1","email":"bob1@email.com"},
    {"id":2,"firsName":"Bob2","lastName":"Smith2","email":"bob2@email.com"},
    {"id":3,"firsName":"Bob3","lastName":"Smith3","email":"bob3@email.com"},
    {"id":4,"firsName":"Bob4","lastName":"Smith4","email":"bob4@email.com"}
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
}
);
