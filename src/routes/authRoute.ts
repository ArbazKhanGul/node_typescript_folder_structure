import express, { Router } from "express";
import  validate  from "../middleware/validateMiddleware";
import  signupSchema  from "../validations/userValidation";
import {register,login}  from "../controllers/authController";
import  upload  from '../middleware/multer';

const router: Router = express.Router();

router.route("/register").post(upload.single('profileImage'), validate(signupSchema), register);

router.route("/login").post(login);

export default router;