const router = require('koa-router')()
const userController = require('../controllers/user.controller');

router.get('/', userController.get);

router.get('/hasone', userController.hasOne);

router.get('/hasmany', userController.hasMany);

router.get('/belongsto', userController.belongsTo);

router.get('/belongsmany', userController.belongsMany);

router.post('/', userController.create);

router.put('/', userController.update);

router.delete('/', userController.delete);

module.exports = router
