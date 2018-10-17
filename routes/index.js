
/*
 * GET home page.
 */
var coap = require('coap');
var host_coap = "192.168.0.106";

// create and decode client requests
function sendQuery(func,machine,port,path,args,body,done){

    var req =coap.request({
        method:func,
        hostname:machine,
        port:port, observe:body,
        pathname:path, query:args
    });
    req.write(args);
    req.on('error', function(err){
        console.log('coap query error: '+func+' '+machine+':'+port+path+'&'+args+' >'+err.toString());
        done(undefined);
    });
    req.on('timeout', function(){
// error callback above is called first
        console.log('coap query timeout: '+func+' '+machine+':'+port+path+'&'+args);
    });
    req.on('response', function(res){
        // console.log('coap responce to ['+func+' '+machine+':'+port+path+'&'+args+']: ' +res.code);
        var obj =null;
        obj = res.payload;
        res.pipe(process.stdout);
        done(obj);

    }.bind(this));
// done
    req.end();
    console.log('coap query sent: '+func+' '+machine+':'+port+path+'&'+args);
};



exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};


exports.setValues = function(req, res) {

    // console.log("===================================");

    var payloadTemp = req.body.temp_max + "";

    var payloadUmid = req.body.umid_max + "";

    //Send POST temperatura máxima
    sendQuery('POST', host_coap,'5683','temp-threshold',payloadTemp,false,function(obj){

        console.log(obj);

    });

    //Send POST umidade máxima
    sendQuery('POST',host_coap,'5683','hum-threshold',payloadUmid,false,function(obj){

        console.log(obj);

    });

};


exports.getData = function(req, resp) {

    //GET Observable status
    sendQuery('GET',host_coap,'5683','orchestrator',"",true,function(obj){

        resp.json({ data: obj.toString()});

    });

};

