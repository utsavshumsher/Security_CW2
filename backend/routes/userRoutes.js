// import express from 'express';
// import {
//   authUser,
//   registerUser,
//   logoutUser,
//   getUserProfile,
//   updateUserProfile,
//   getUsers,
//   deleteUser,
//   getUserById,
//   updateUser,
// } from '../controllers/userController.js';
// import { protect, admin } from '../middleware/authMiddleware.js';

// const router = express.Router();

// router.route('/').post(registerUser).get(protect, admin, getUsers);
// router.post('/auth', authUser);
// router.post('/logout', logoutUser);
// router
//   .route('/profile')
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);
// router
//   .route('/:id')
//   .delete(protect, admin, deleteUser)
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser);

// export default router;

import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import passwordValidationMiddleware from '../middleware/passwordValidationMiddleware.js'; // Import the middleware

const router = express.Router();

// Apply password validation middleware to the registration route
router
  .route('/')
  .post(passwordValidationMiddleware, registerUser)  // Added middleware here
  .get(protect, admin, getUsers);

router.post('/auth', authUser);
router.post('/logout', logoutUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
