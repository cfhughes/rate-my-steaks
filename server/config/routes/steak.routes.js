const steakController = require('../../controllers/steak.controller');
const router = require('express').Router();

module.exports = router
    .get('/', steakController.index)
    .get('/:id', steakController.show)
    .post('/', steakController.create)
    .post('/:id/ratings', steakController.createRating)
    .put('/:id', steakController.update)
    .delete('/:id', steakController.destroy);