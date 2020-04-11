const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');


const experienceController = require('./controllers/experienceController');
const educationController = require('./controllers/educationController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

//sessions
routes.post('/session/login', sessionController.create)

//experience
routes.get('/experience', celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.optional()
    }).unknown(),
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
        limit:Joi.number(),
    })
}),experienceController.get);
routes.post('/experience', celebrate({
    [Segments.BODY] : Joi.object().keys({
        company: Joi.string().required(),
        activities: Joi.string().required(),
        start: Joi.string().required().regex(/^[0-9]{4}$/),
        role: Joi.optional(),
        end: Joi.string().required(),
    })
}), experienceController.create);
routes.delete('/experience/:id', celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required(),
    })
}),experienceController.delete);

//education
routes.get('/education', educationController.get);
routes.post('/education',educationController.create);
routes.delete('/education/:id',educationController.delete);

module.exports = routes;

