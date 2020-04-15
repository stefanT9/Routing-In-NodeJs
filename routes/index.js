const { Router } = require('../utils/Router')
const indexController = require('../controller/index')

var router = new Router()


router.get('/', indexController.getIndexHTML)
router.get('/exemplu', indexController.exempleAPI)
router.get('/index', indexController.getIndexHTML)
router.get('/index.html', indexController.getIndexHTML)
router.get('/index.css', indexController.getIndexCSS)
router.get('/index.js', indexController.getIndexJS)

///exemplu
///router.get(url_string, functieApelata)
///
module.exports.index = router
