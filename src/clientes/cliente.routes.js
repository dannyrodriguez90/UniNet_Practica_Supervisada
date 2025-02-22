import { Router } from "express";
import { obtenerUsuarioPorId, obtenerUsuarios, actualizarContrasena, actualizarUsuario, actualizarFotoPerfil } from "./cliente.controller.js";
import { getUserByIdValidator, updatePasswordValidator, updateUserValidator, updateProfilePictureValidator } from "../middlewares/cliente-validator.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Rutas para la gestión de clientes
 */

/**
 * @swagger
 * /cliente/findUser/{uid}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.get("/findUser/:uid", getUserByIdValidator, obtenerUsuarioPorId);

/**
 * @swagger
 * /cliente/:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *       400:
 *         description: Error en la solicitud
 */
router.get("/", obtenerUsuarios);

/**
 * @swagger
 * /cliente/updatePassword/{uid}:
 *   put:
 *     summary: Actualizar contraseña del usuario
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña actualizada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.put("/updatePassword/:uid", updatePasswordValidator, actualizarContrasena);

/**
 * @swagger
 * /cliente/updateUser/{uid}:
 *   put:
 *     summary: Actualizar datos del usuario
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.put("/updateUser/:uid", updateUserValidator, actualizarUsuario);

/**
 * @swagger
 * /cliente/updateProfilePicture/{uid}:
 *   patch:
 *     summary: Actualizar foto de perfil del usuario
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Foto de perfil actualizada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.patch("/updateProfilePicture/:uid", uploadProfilePicture.single("profilePicture"), updateProfilePictureValidator, actualizarFotoPerfil);

export default router;