const router = require('express').Router()
const account = require('../models/account')

router.post('/accounts', (req, res) => {
    console.log(req.data);
    var acc = account.register(req.body.login, req.body.password);
    if (acc){
        res.send({success: true, data: acc});
    }
    else
        // TODO: Failure reasons
        res.send({success: false, message: "Creation failed."});    
})

module.exports = router