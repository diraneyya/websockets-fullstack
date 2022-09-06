var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})

let counter = 0;

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  setInterval(
    () => ws.send(`Hello from Orwa (#${counter++})`),
    5000
  )
})
