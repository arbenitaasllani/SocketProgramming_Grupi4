var udp = require('dgram');
var client = udp.createSocket('udp4');
client.on('message',function(msg,info){
    console.log('Data received from server : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n',msg.length,    info.address, info.port);
  });
  var data = Buffer.from('Pershendetje une jam klienti i pare!');
  client.send(data,7788,'localhost',function(error){
    if(error){
      console.log(error);
      client.close();
    }else{
      console.log('Te dhenat u derguan!');
    }
     
  });
