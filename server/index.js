var express = require("express");
var app = express();
var route = express.Router();//route object ini

var connections = [];
route.get('/records',function(req,res){
req.socket.setTimeout(555555555);

res.writeHead(200,{
'Content-Type' : 'text/event-stream',
'Cache-Control' : 'no-cache',
'Connection' : 'keep-alive'
})
res.write("\n");
connections.push(res)
});
setInterval(function(){

for(var i=0;i<connections.length;i++){
    var dt = new Date();
connections[i].write(`data:${dt.getMilliseconds()} \n\n`)
}

},1000)
app.use('/api',route);
app.listen(3001,function(){
    console.log("Server starts")
})