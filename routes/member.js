const express = require('express');
const router = express.Router();

router.get('/member', (req, res) => {
    res.render('member');
});


module.exports = router;