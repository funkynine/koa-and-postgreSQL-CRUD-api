const router = require('koa-router')()
const userController = require('../controllers/user.controller');
const customersController = require('../controllers/customers.controller');

router.get('/', userController.get);

router.post('/', userController.create);

router.put('/', userController.update);

router.delete('/', userController.delete);

// // Customers
// router.get('/v1', customersController.get);

// router.post('/v1', customersController.create);

// router.put('/v1', customersController.update);

// router.delete('/v1', customersController.delete);

module.exports = router
