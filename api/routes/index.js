const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes')
const adminRoutes = require('./adminRoutes')
const aircraftRoutes = require('./aircraftRoutes')

router.use('/user' , userRoutes);
router.use('/admin' ,adminRoutes);
router.use('/aircraft' , aircraftRoutes);

module.exports = router;