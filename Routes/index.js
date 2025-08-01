const express = require('express');

const NewsRoutes = require('./NewsRoutes');
const imageRoutes = require('./imageRoute');
const adminRoutes = require('./AdminRoutes');
const videoRoutes = require('./videoRoute');

const router = express.Router();

router.use('/News', NewsRoutes);
router.use('/upload', imageRoutes);
router.use('/admin', adminRoutes);
router.use('/uploadVideo', videoRoutes);

module.exports = router;
