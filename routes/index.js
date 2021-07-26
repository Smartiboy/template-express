var express = require('express');
var router = express.Router();

router.get('/index', function(req, res, next) {
    res.json({
        errno: 0,
        data: 'Hello world'
    })
});

module.exports = router;
