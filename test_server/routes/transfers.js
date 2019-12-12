const router = require('express').Router()


var history = [
    {
        id: 101,
        from_wallet: "BTC",
        from_amount: 100,
    
        to_system: {name: "Ethereum", code: "ETH", course: 1.32},
        to_address: "123123123123",
        to_amount: 100 * 1.32,
    
        status: "Pending approve"
    },

    {
        id: 102,
        from_wallet: "USD",
        from_amount: 100,
    
        to_system: {name: "MasterCard(RUR)", code: "RUR", course: 1.32},
        to_address: "1234 5678 9012 3456",
        to_amount: 100 * 1.32,
    
        status: "Trasnferring"
    },

    {
        id: 103,
        from_wallet: "ETH",
        from_amount: 100,
    
        to_system: {code: "RUR", course: 1.32},
        to_address: "123123123123",
        to_amount: 100 * 1.32,
    
        status: "Complete"
    }
    
]

router.post('/transfers', (req, res) => {
    return res.send({success: true, data: {id: 101, amount_from: 100, amout_to: 100}});
})

router.get('/transfers', (req, res) => {
    res.send({success: true, data: history});
})


router.get('/transfers/:id', (req, res) => {
    res.send({success: true, data: history[0]});
})

// Approve transfer to go
router.post('/transfers/:id', (req, res) => {
    history[0].status = "Trasferring..."
    res.send({success: true, data: history[0]});
})


module.exports = router