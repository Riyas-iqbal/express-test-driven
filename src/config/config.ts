import dotenv from 'dotenv'
dotenv.config()

import Joi from 'joi'

const envSchema = Joi.object().keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    ACCESS_TOKEN_SECRET: Joi.string().required(),
    REFRESH_TOKEN_SECRET: Joi.string().required(),
    ACCESS_TOKEN_EXPIRATION: Joi.string().required(),
    REFRESH_TOKEN_EXPIRATION: Joi.string().required()
}).unknown()

const { value: env, error } = envSchema.validate(process.env)

if (error) {
    console.log(error)
    throw new Error(`Config validation error: ${error.message}`)
}

export default {
    env: <string>env.NODE_ENV,
    PORT: <number>env.PORT,
    ACCESS_TOKEN_SECRET: <string>env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: <string>env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRATION: <string>env.ACCESS_TOKEN_EXPIRATION,
    REFRESH_TOKEN_EXPIRATION: <string>env.REFRESH_TOKEN_EXPIRATION,
}