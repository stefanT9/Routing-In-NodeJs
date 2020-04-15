const http = require('http')
const { port } = require('../utils/constants')
class WebApp {
  constructor (port, router) {
    this.port = port
    this.router = router
  }

  use () {

  }

  listen () {
    var app = this
    var server = http.createServer(function (req, res) {
      app.router.route(req, res)
      res.end()
    })
    server.listen(port)
    console.log(`app running on PORT: ${port}`)
  }
}

module.exports = { WebApp }
