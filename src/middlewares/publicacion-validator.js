import { body, param } from "express-validator";
import { validarCampos } from "./validate-campos.js";

export const crearPublicacionValidator = [
    body("titulo").notEmpty().withMessage("El título es requerido"),
    body("categoria").notEmpty().withMessage("La categoría es requerida"),
    body("texto").notEmpty().withMessage("El texto es requerido"),
    validarCampos
];

export const editarPublicacionValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("titulo").optional().notEmpty().withMessage("El título no puede estar vacío"),
    body("categoria").optional().notEmpty().withMessage("La categoría no puede estar vacía"),
    body("texto").optional().notEmpty().withMessage("El texto no puede estar vacío"),
    validarCampos
];

export const eliminarPublicacionValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos
];