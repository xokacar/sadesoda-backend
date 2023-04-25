import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { IUserDocument, User } from "../models/user"
import { generateAccesToken } from "../middlewares/authMiddleware"

export const loginUser = async (req: Request, res: Response) => {
	try {
		const user = (await User.findOne({
			email: req.body.email,
		})) as IUserDocument
		if (!user) {
			return res.status(401).json({ message: "Wrong e-mail or password" })
		}
		const passwordMatch = await bcrypt.compare(
			req.body.password,
			user.password,
		)
		if (!passwordMatch) {
			return res
				.status(401)
				.json({ message: "Wrong e-mail or passwordd" })
		}
		const accesToken = generateAccesToken(user)
		res.json({ accesToken })
	} catch (error) {
		res.status(500).json({ message: "Interval server Error" })
	}
}
