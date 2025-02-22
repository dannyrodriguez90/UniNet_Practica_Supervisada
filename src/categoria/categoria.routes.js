import { Router } from "express";
import { createCategory, editCategory, deleteCategory, getCategories } from "./categoria.controller.js";
import { categoriaValidator } from "../middlewares/categoria-validator.js";
import { isAdmin } from "../middlewares/auth.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Rutas para la gestión de categorías
 */

/**
 * @swagger
 * /categoria/createCategory:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post("/createCategory", [isAdmin, categoriaValidator], createCategory);

/**
 * @swagger
 * /categoria/editCategory/{id}:
 *   put:
 *     summary: Editar una categoría existente
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría editada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.put("/editCategory/:id", [isAdmin, categoriaValidator], editCategory);

/**
 * @swagger
 * /categoria/deleteCategory/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.delete("/deleteCategory/:id", isAdmin, deleteCategory);

/**
 * @swagger
 * /categoria/getCategories:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *       400:
 *         description: Error en la solicitud
 */
router.get("/getCategories", getCategories);

export default router;