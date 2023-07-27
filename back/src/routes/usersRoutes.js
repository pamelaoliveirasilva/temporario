const express = require('express');
const router = express.Router();
const validateRequest = require('../middleware/validateRequestMiddleware');
const verifyToken = require('../middleware/authMiddleware');
const { registerUser, editUser } = require('../controllers/usersController');
const { registerUserSchema, editUserSchema } = require('../validations/userValidations');

router.post('/users', validateRequest(registerUserSchema), registerUser);
router.use(verifyToken);
router.put('/users', validateRequest(editUserSchema), editUser);

module.exports = router;
