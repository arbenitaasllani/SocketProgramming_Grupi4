var udp = require('dgram');
var client = udp.createSocket('udp4');
client.on('message',function(msg,info){
    console.log('Data received from server : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n',msg.length,    info.address, info.port);
  });
