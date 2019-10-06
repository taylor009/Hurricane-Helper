const express = require('express');
const router = express.Router();

router.post('', function(req, res) {
    let id = req.params.id;
    let token = req.params.token;
    let send = req.query.send;
    
});

module.exports = router;