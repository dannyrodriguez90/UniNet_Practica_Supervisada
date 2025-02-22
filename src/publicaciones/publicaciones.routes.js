import { Router } from "express";
import { crearPublicacion, editarPublicacion, eliminarPublicacion, obtenerPublicaciones } from "./publicaciones.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { crearPublicacionValidator, editarPublicacionValidator, eliminarPublicacionValidator } from "../middlewares/publicacion-validator.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Publicaciones
 *   description: Rutas para la gestión de publicaciones
 */

/**
 * @swagger
 * /publicaciones/crearPublicacion:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [Publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               contenido:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicación creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post("/crearPublicacion", [validarJWT, crearPublicacionValidator], crearPublicacion);

/**
 * @swagger
 * /publicaciones/editarPublicacion/{id}:
 *   put:
 *     summary: Editar una publicación existente
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la publicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               contenido:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicación editada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.put("/editarPublicacion/:id", [validarJWT, editarPublicacionValidator], editarPublicacion);

/**
 * @swagger
 * /publicaciones/eliminarPublicacion/{id}:
 *   delete:
 *     summary: Eliminar una publicación
 *     tags: [Publicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la publicación
 *     responses:
 *       200:
 *         description: Publicación eliminada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.delete("/eliminarPublicacion/:id", [validarJWT, eliminarPublicacionValidator], eliminarPublicacion);

/**
 * @swagger
 * /publicaciones:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags: [Publicaciones]
 *     responses:
 *       200:
 *         description: Lista de publicaciones
 *       400:
 *         description: Error en la solicitud
 */
router.get("/", obtenerPublicaciones);

export default router;