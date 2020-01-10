const router = require('koa-router')()
const userController = require('../controllers/user.controller');

router.get('/', userController.get);

router.post('/', userController.create);

router.put('/', userController.update);

router.delete('/', userController.delete);

module.exports = router
