import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import * as errorCodes from '../config/error.codes'

/**
 * @desc To throw an error that is not defined
 * @usage throw new AppError (1001,'This is an error message',419)
 * 
 * @desc To throw an error that is defined
 * @usage throw AppError.validation('This is an error message') 
 */

class AppError extends Error {
    constructor(
        public readonly appCode = errorCodes.DEFAULT_ERROR,
        public readonly errorMessage = ReasonPhrases.INTERNAL_SERVER_ERROR,
        public readonly statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        super(errorMessage)
        this.appCode = appCode
        this.statusCode = statusCode
    }

    static validation(message = ReasonPhrases.BAD_REQUEST) {
        return new AppError(
            errorCodes.VALIDATION_ERROR,
            message,
            StatusCodes.BAD_REQUEST
        )
    }

    static authentication(message = ReasonPhrases.UNAUTHORIZED) {
        return new AppError(
            errorCodes.AUTHENTICATION_ERROR,
            message,
            StatusCodes.UNAUTHORIZED
        )
    }

    static forbidden(message = ReasonPhrases.FORBIDDEN) {
        return new AppError(errorCodes.FORBIDDEN_ERROR,
            message,
            StatusCodes.FORBIDDEN
        )
    }
}

export default AppError