const Steak = require('mongoose').model('Steak');
const errorHandler = require('./concerns/error-handler');

module.exports = {
  index: function(request, response) {
    Steak.find()
      .then(Steaks => response.json(Steaks))
      .catch(err=> response.json(err));
  },
  show: function(request, response) {
    Steak.findById(request.params.id)
      .then(Steak => response.json(Steak))
      .catch(errorHandler.bind(response));
  },
  create: function(request, response) {
    Steak.create(request.body)
      .then(Steak => response.json(Steak))
      .catch(errorHandler.bind(response));
  },
  createRating: function(request, response) {
    console.log(request.body)
    Steak.findById(request.params.id)
      .then(steak => {
        steak.ratings.push(request.body)
        return steak.save();
      })
      .then(steak => response.json(steak))
      .catch(errorHandler.bind(response));
  },
  update: function(request, response) {
    Steak.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(Steak => response.json(Steak))
      .catch(errorHandler.bind(response));
  },
  destroy: function(request, response) {
    Steak.findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
      .catch(errorHandler.bind(response));
  },
};