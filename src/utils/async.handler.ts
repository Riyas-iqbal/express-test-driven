import { Middleware } from '../types/middleware.type'
import { Controller } from '../types/controller.type'

const asyncHandler = (fn: Controller): Middleware => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        return next(error)
    }
}

export default asyncHandler

