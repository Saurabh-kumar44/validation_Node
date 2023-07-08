const express= require('express');

const router= express.Router();
const userController = require('../controllers/user_controllers');

console.log("router loaded for user");

router.get('/profile', userController.profile);

//routes for sign up pages
router.get('/signup', userController.signup);
router.get('/signin', userController.signin);
router.post('/create', userController.create);
router.post('/create-session', userController.createSession);


module.exports = router; 