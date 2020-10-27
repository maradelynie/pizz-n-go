const express = require('express');
const controller = require('../services');

const ordersRouter = express.Router();

// ordersRouter.get('/:user/', controller.readUser);
ordersRouter.get('/:page?', controller.read);
ordersRouter.post('/', controller.create);
ordersRouter.delete('/:id', controller.deleteOne);
ordersRouter.patch('/:id', controller.edit);

module.exports = ordersRouter;
