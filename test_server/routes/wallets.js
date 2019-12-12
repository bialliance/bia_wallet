const router = require('express').Router()

// var router = Router();

var wallets = {
    "USDT": {letter: "U", ico: "icon.png", amount: 16.00},
    "BTC": {letter: "U", ico: "icon.png", amount: 12.211231},
    "ETH": {letter: "U", ico: "icon.png", amount: 4123456.34},
    "USD": {letter: "U", ico: "icon.png", amount: 234456.88}
}

for (var k in wallets){
    wallets[k].name = k;
}

router.get('/wallets', (req, res) => {
    return res.send({success: true, data: Object.values(wallets)})
})

router.get('/wallets/:name', (req, res) => {
    var w = wallets[req.params.name];

    if (w)
        res.send({success: true, data: w});
    else
        res.send({success: false, message: "Wallet " + req.params.name + " not found."});
})

module.exports = router