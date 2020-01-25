/* Handle routes */

const express = require('express');
const router = express.Router();


// Instantiate controllers 
const homeController = new (require('../src/controllers/HomeController.js'))();
const feedController = new (require('../src/controllers/FeedController.js'))();



router.get('/', (req, res) => homeController.render(req, res));
router.get('/feed', (req, res) => feedController.render(req, res));


// export router
module.exports = router;