const router = require('express').Router();

router.use('/user', require('./userRoutes'))
router.use('/url', require('./urlRoutes'))

module.exports = router;