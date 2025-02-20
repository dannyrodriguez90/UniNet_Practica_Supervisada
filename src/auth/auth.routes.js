import express from 'express';
import { register, login } from "./auth.controller.js";
import { registerValidator, loginValidator } from "../middlewares/cliente-validator.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";

const router = express.Router();

router.post("/register", uploadProfilePicture.single("profilePicture"), registerValidator, register);

router.post("/login", loginValidator, login);

export default router;