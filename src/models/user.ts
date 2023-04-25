// Mongoose
import { Schema, model, ObjectId, Document } from "mongoose"

// Interface for the user model
interface IUser {
	name: string,
	email: string,
	password: string
}

export interface IUserDocument extends IUser, Document {
    _id: ObjectId
  }

// Schema for the user model
const userSchema = new Schema<IUserDocument>({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
})

// Create the model
export const User = model<IUser>("User", userSchema)
