// Express
import express, { Request, Response, NextFunction } from "express"

// Express Validator
import { body, validationResult } from "express-validator"

//jwt
import jwt, { Secret } from "jsonwebtoken"

// bcrypt
import bcrypt from "bcrypt"

//model
import { User, IUserDocument } from "../models/user";

//Config (because of "access_token_secret")
import config from "../config/config"

// Middleware for validating signup requests
export const validateSignup = [
	body("name").notEmpty().withMessage("Name is required"),
	body("email").isEmail().withMessage("Email is required"),
	body("password")
		.isLength({ min: 8 })
		.withMessage("Password must be at least 8 characters"),
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const saltRounds = 10
			const hashedPassword = await bcrypt.hash(
				req.body.password,
				saltRounds,
			)
			req.body.password = hashedPassword
			next()
		} catch (error) {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() })
			}
			next(error)
		}
	},
]



export const generateAccesToken = (user : IUserDocument) => {
	const payload = {
		userId: user._id,
		email: user.email,
	}
    const secret = config.auth.AccesTokenSecret
	return jwt.sign(payload, secret as Secret, {
		expiresIn: "15m",
	})
}
