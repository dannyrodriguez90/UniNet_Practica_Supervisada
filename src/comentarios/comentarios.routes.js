import { Router } from "express";
import { agregarComentario, editarComentario, eliminarComentario } from "./comentarios.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { comentarioValidator } from "../middlewares/comentario-validator.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Comentarios
 *   description: Rutas para la gestión de comentarios
 */

/**
 * @swagger
 * /comentarios/agregarComentario/{id}:
 *   post:
 *     summary: Agregar un nuevo comentario
 *     tags: [Comentarios]
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
 *               comentario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comentario agregado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post("/agregarComentario/:id", [validarJWT, comentarioValidator], agregarComentario);

/**
 * @swagger
 * /comentarios/editarComentario/{comentarioId}/{id}:
 *   put:
 *     summary: Editar un comentario existente
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: comentarioId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comentario
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
 *               comentario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comentario editado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.put("/editarComentario/:comentarioId/:id", [validarJWT, comentarioValidator], editarComentario);

/**
 * @swagger
 * /comentarios/eliminarComentario/{comentarioId}/{id}:
 *   delete:
 *     summary: Eliminar un comentario
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: comentarioId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comentario
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la publicación
 *     responses:
 *       200:
 *         description: Comentario eliminado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.delete("/eliminarComentario/:comentarioId/:id", validarJWT, eliminarComentario);

export default router;