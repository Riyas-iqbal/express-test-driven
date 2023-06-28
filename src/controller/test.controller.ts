import AppError from "../utils/app.error";
import asyncHandler from "../utils/async.handler";
import { StatusCodes } from 'http-status-codes'

const testErrorHandling = asyncHandler(async (req, res) => {
    const errorExists = true 
    if (errorExists) {
        throw AppError.validation()
    }
    res.status(StatusCodes.OK).json({ message: 'test' })
})

export default {
    testErrorHandling
}

