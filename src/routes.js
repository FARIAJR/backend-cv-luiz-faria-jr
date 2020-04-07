const express = require('express');
const experienceController = require('./controllers/experienceController');
const educationController = require('./controllers/educationController');
const sessionController = require('./controllers/sessionController');
const routes = express.Router();

//sessions
routes.post('/session/login', sessionController.create)

//experience
routes.get('/experience', experienceController.get);
routes.post('/experience',experienceController.create);
routes.delete('/experience/:id',experienceController.delete);

//education
routes.get('/education', educationController.get);
routes.post('/education',educationController.create);
routes.delete('/education/:id',educationController.delete);

module.exports = routes;

