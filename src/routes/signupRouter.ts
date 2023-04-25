// Express
import { Router } from "express"

// Controller
import { createUser } from "../controllers/SignupController"

// Middleware
import { validateSignup } from "../middlewares/authMiddleware"

const router = Router()

router.post("/api/users/signup", validateSignup, createUser)

export default router
