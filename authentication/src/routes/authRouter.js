const express = require('express');
const authRouter = express.Router();
const hello =require('../controllers/authController')


//authRouter.post('/register', register);

authRouter.get('/', hello);

//authRouter.post('/login', login);

//authRouter.post('/forgotpassword', forgotPassword);

//authRouter.put('/resetpassword/:resetToken', resetPassword);


module.exports = authRouter;