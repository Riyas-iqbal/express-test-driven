import jwt from 'jsonwebtoken'
import config from '../config/config'
import { User } from '../../index'

const createAccessToken = (user: User) => {
    return jwt.sign(
        { user },
        config.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION })
}

const createRefreshToken = (user: User) => {
    return jwt.sign(
        { user },
        config.REFRESH_TOKEN_EXPIRATION,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION }
    )
}

export {
    createAccessToken,
    createRefreshToken
}