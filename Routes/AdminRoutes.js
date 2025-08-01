const express = require('express');

const { signup, login, getAdmin } = require('../Controllers/AdminControllers');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', getAdmin);

module.exports = router;
