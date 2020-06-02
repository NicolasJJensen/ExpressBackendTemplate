clients = (ws, req) => (
  Array.from(req.wss.getWss().clients)
    .filter((socket)=> socket.route === ws.route)
)

filteredClients = (req, fun) => (
  Array.from(req.wss.getWss().clients)
    .filter(fun)
)

const setup = (ws, req) => {
  // ws.route = `${req.baseUrl}/${req.query.id}`
  ws.user = req.user
}

module.exports = {
  clients: clients,
  filteredClients: filteredClients,
  setup: setup
}
