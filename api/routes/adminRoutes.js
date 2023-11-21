const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');
const { authenticate , authorizeAdmin , authorizeUser } = require('../middleware/authMiddleware'); // Import the authenticate middleware


//Admin Routes
router.post('/register', adminController.registerAdmin);
router.post('/login', adminController.loginAdmin);

// Define routes for admin-related operations
router.get('/', adminController.getAllAdmins);
router.get('/:id', adminController.getAdminById);
router.put('/:id', adminController.updateAdmin);
router.put('/forgotPassword/:email', adminController.forgotPassword); // New route for forgot password
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
