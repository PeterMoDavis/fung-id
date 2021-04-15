const router = require('express').Router();
const temperature = require('temperature');
const humidity = require('./humidity');
const weathertype = require('./weathertype');
const location = require('./location');

router.use('/temperature', temperature);
router.use('/humidity', humidity);
router.use('/weathertype', weathertype);
router.use('/location', location);

module.exports = router;
