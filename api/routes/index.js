const express = require('express');
const router = express.Router();

const airlineRoutes = require('./airlineRoutes')
const userRoutes = require('./userRoutes')
const adminRoutes = require('./adminRoutes')
const aircraftRoutes = require('./aircraftRoutes')

router.use('/user' , userRoutes);
router.use('/admin' ,adminRoutes);
router.use('/aircraft' , aircraftRoutes);
router.use('/airline' , airlineRoutes)

module.exports = router;