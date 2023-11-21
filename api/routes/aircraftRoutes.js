const express = require('express');
const router = express.Router();
const aircraftController = require('../controllers/aircraftControllers');
// const { authenticate , authorizeAdmin , authorizeUser } = require('../middleware/authMiddleware'); // Import the authenticate middleware
const upload = require('../middleware/multer'); // Import the upload middleware


router.post('/', upload.single('image_aircraft') , aircraftController.createAircraft);
router.get('/',aircraftController.getAllAircrafts)

module.exports = router;
