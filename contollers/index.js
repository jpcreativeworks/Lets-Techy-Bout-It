const router = require('express').Router();
const techyHomeRoutes = require('./homepage-routes'); 

router.use('/', techyHomeRoutes)

module.exports = router;