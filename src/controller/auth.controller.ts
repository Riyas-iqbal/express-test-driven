import { createAccessToken, createRefreshToken } from '../utils/generate.tokens.util'
import asyncHandler from '../utils/async.handler'
import { RequestHandler } from 'express'
import { Roles } from 'index'

const handleSignIn = asyncHandler((req, res) => {
    console.log("call got")
    const user = {
        id:'1',
        name:  'Riyas',
        role: Roles.USER
    }
    const accessToken = createAccessToken(user)
    const refreshToken = createRefreshToken(user)

    res.json({
        refreshToken,
        accessToken
    })
})


export {
    handleSignIn
}

