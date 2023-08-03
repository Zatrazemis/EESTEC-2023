import express from 'express';
const router = express.Router();
import { authUser, registerUser, logoutUser, weeklyUpdater, internationalUpdater,  getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/users/auth', authUser)
router.post('/users/register', registerUser)
router.post('/users/logout', logoutUser)
router.get('/weekly', weeklyUpdater)
router.get('/international', internationalUpdater)
router.route('/users/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;