import {Router} from 'express'
import * as userController from '../controllers/user.controller.js'
import * as authMiddleware from '../middleware/auth.middleware.js'
import {body} from 'express-validator'




const router = Router();


router.post('/register',
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({min:3}).withMessage('Password must be a '),
    userController.creatUserController);

router.post('/login',
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({min:3}).withMessage('Password must be a '),
    userController.loginController);

router.post('/profile',authMiddleware.authUser,userController.profileController);
router.post('/logout',authMiddleware.authUser,userController.logoutController);



export default router;