import { Router } from 'express'
import isAuth from '../middlewares/authentication'
import testController from '../controller/test.controller'

const router = Router()

router
    .route('/private')
    .post(
        isAuth,
        (req, res) => {
            console.log(req.user)
            res.send(req.user)
        }
    )

router
    .route('/')
    .get(testController.testErrorHandling)


export default router