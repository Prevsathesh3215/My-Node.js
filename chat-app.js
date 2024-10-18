const net = require('net');
const PORT = 3000;

let clients = [];
let sentClient;

const server = net.createServer((socket) => {

  const clientAddr = socket.remoteAddress;
  const clientPort = socket.remotePort;
  clients.push(socket);

  socket.write( `Client ${clientAddr}, ${clientPort} connected. Say Hi!\n`)
  // console.log(clients);

  socket.write(Buffer.from('Hello! This is a chatroom where you can talk to other people! Have fun!\n'))
 
  socket.on('data', (clientData) =>{
    strData = clientData.toString();
    strData = strData.trim()
    console.log(`${strData} from ${clientPort}`)

    broadcastMsg(strData, socket);

  });

  // socket.on('end', () => {
  //   console.log('Client disconnected');
  // });

  socket.on('error', (err) => {
    if (err.code === 'ECONNRESET') {
        console.error(`Client ${clientPort} disconnected.`);
        broadcastMsg(`Client ${clientPort} disconnected.`, socket)
    } else {
        console.error('Error occurred:', err.message);
    }
  }); 
});


server.on('disconnect', (err) => {
  console.log('A client has disconnected.')
});


server.on('end', (err) => {
  console.log('Bye')
});

function broadcastMsg(msg, sender){
  clients.forEach((client) => {
    if (client === sender){
      console.log('sender port');
    } else{
      client.write(Buffer.from('\n' + msg + '\n'));
    }
  });
}

server.on('close', () => {
  console

})
server.listen(PORT, 'localhost');