import { Router } from "express";
import { obtenerUsuarioPorId, obtenerUsuarios, actualizarContrasena, actualizarUsuario, actualizarFotoPerfil, } from "./cliente.controller.js";
import { getUserByIdValidator, updatePasswordValidator, updateUserValidator, updateProfilePictureValidator, } from "../middlewares/cliente-validator.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";

const router = Router();

router.get("/findUser/:uid", getUserByIdValidator, obtenerUsuarioPorId);
router.get("/", obtenerUsuarios);
router.put("/updatePassword/:uid", updatePasswordValidator, actualizarContrasena);
router.put("/updateUser/:uid", updateUserValidator, actualizarUsuario);
router.patch("/updateProfilePicture/:uid", uploadProfilePicture.single("profilePicture"), updateProfilePictureValidator, actualizarFotoPerfil);

export default router;