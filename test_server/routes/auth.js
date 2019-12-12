const router = require('express').Router()
const account = require('../models/account')

router.post('/auth', (req, res) => {
    var acc = account.login(req.body.email, req.body.password);
    if (acc){
        res.send({success: true, data: acc});
    }
    else
        // TODO: Failure reasons
        res.send({success: false, message: "Login failed."});
    
})

module.exports = router