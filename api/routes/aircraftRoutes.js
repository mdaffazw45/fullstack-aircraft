const express = require('express');
const router = express.Router();
const aircraftController = require('../controllers/aircraftControllers');
// const { authenticate , authorizeAdmin , authorizeUser } = require('../middleware/authMiddleware'); // Import the authenticate middleware
const upload = require('../middleware/multer'); // Import the upload middleware


router.post('/', upload.single('image_aircraft') , aircraftController.createAircraft);
router.get('/',aircraftController.getAllAircrafts)
router.get('/:id' , aircraftController.getAircraftById)
router.put('/:id', upload.single('image_aircraft'), aircraftController.editAircraftById);
router.delete('/:id', aircraftController.deleteAircraftById);


module.exports = router;
    