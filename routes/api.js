var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:currency/balance', function (req, res, next) {
    res.send(req.params);
});

module.exports = router;