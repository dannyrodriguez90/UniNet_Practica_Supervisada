import { Router } from "express";
import { agregarComentario, editarComentario, eliminarComentario } from "./comentarios.controller.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { comentarioValidator } from "../middlewares/comentario-validator.js";

const router = Router();

router.post("/agregarComentario/:id", [validarJWT, comentarioValidator], agregarComentario);
router.put("/editarComentario/:comentarioId/:id", [validarJWT, comentarioValidator], editarComentario);
router.delete("/eliminarComentario/:comentarioId/:id", validarJWT, eliminarComentario);

export default router;