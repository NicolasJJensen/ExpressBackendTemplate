const { clients, filteredClients, setup } = require('@helpers/webSocket')


const example = async (ws, req) => {
  // Run setup to keep track of WS
  setup(ws, req)

  ws.on('message', async (content) => {
  })

  ws.on('close', () => {
  })
}

module.exports = {
  example: example
}
