const { Router } = require('./utils/Router')
const { WebApp } = require('./utils/WebApp')
const constants = require('./utils/constants')
const { index } = require('./routes/index')

const router = new Router()
router.use('', index)
console.log(router)

const app = new WebApp(constants.port, router)
app.listen()

console.log()
