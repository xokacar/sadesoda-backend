//Express
import { Request, Response } from "express"

// Model
import { User } from "../models/user"

export const createUser = async (req: Request, res: Response) => {
	try {
		const existingUser = await User.findOne({ email: req.body.email })
		if (existingUser) {
			return res
				.status(400)
				.json({ message: "User with this email already exists" })
		}
		const newUser = await new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		})
		await newUser.save()
		return res.status(201).json({ message: "User created successfully" })
	} catch (err) {
		return res.status(500).json({ message: "Internal server error" })
	}
}
