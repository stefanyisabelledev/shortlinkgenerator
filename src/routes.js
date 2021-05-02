const cors = require('cors');
const {Router, json} = require('express');
const LinkShortenerController = require('./controllers/LinkShortenerController')


const routes = new Router();


routes.use(cors());
routes.use(json());
routes.post('/short',LinkShortenerController.create)
routes.get('/:id',LinkShortenerController.getUrl)



module.exports = routes;