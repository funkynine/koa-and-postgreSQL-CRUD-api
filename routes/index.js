// Middlewares
const loggerMW = require('../middleware/logger.MW');
const router = require('koa-router')()
const userController = require('../controllers/user.controller');


router.get('/', loggerMW, userController.get);

router.get('/hasone', loggerMW, userController.hasOne);

router.get('/hasmany', loggerMW, userController.hasMany);

router.get('/belongsto', loggerMW, userController.belongsTo);

router.get('/belongsmany', loggerMW, userController.belongsMany);

router.post('/', loggerMW, userController.create);

router.put('/', loggerMW, userController.update);

router.delete('/', loggerMW, userController.delete);

module.exports = router
