// Express
import { Router } from 'express';

//Controller
import { loginUser } from '../controllers/UserController';

// Login route POST /api/users/login
const router = Router();

router.post('/api/users/login', loginUser);

export default router;
