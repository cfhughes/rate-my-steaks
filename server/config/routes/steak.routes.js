const steakController = require('../../controllers/steak.controller');
const router = require('express').Router();

module.exports = router
    .get('/', steakController.index)
    .get('/:id', steakController.show)
    .post('/', steakController.create)
    .put('/:id', steakController.update)
    .delete('/:id', steakController.destroy);