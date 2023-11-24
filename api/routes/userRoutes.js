const express = require('express');
const router = express.Router();
const {authenticate, authorizeAdmin , authorizeUser }  = require('../middleware/authMiddleware'); // Import authenticate middleware
const userController = require('../controllers/userControllers');
// const { registerUser } = require('../controllers/userControllers');



// Public routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// // Protected routes that require user authentication
router.get('/' ,  userController.getAllUsers);
router.get('/:id', authenticate, userController.getUserById);
router.put('/:id',  userController.updateUser);
router.put('/forgotPassword/:email', userController.forgotPassword); // New route for forgot password
router.delete('/:id',  userController.deleteUser);

module.exports = router;
