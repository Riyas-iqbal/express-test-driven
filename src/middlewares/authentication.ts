import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config/config';
import { NextFunction, Request, Response } from 'express';

const isAuth = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        res.status(401).json({ err: "token is missing" });
        return
    }

    jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).json({ err })
            return
        }

        const { user } = <JwtPayload>decoded
        req.user = user

        next()
    })

}

export default isAuth