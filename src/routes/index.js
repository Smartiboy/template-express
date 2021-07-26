let express = require('express')
let router = express.Router()

router.get('/index', function(req, res) {
    res.json({
        errno: 0,
        data: 'Hello world'
    })
})

module.exports = router
