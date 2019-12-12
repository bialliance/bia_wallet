const router = require('express').Router()

router.use(require('./wallets.js'));
router.use(require('./transfers.js'));
router.use(require('./accounts.js'));
router.use(require('./auth.js'));

module.exports = router