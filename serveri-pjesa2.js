//emits when socket is ready and listening for datagram msgs
server.on('listening',function(){
    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    console.log('Server is listening at port' + port);
    console.log('Server ip :' + ipaddr);
    console.log('Server is IP4/IP6 : ' + family);
  });
  
  //emits after the socket is closed using socket.close();
  server.on('close',function(){
    console.log('Socket is closed !');
  });
  
  server.bind(2222);
  
  setTimeout(function(){
  server.close();
  },8000);