import { Router } from "express";
import { crearPublicacion, editarPublicacion, eliminarPublicacion, obtenerPublicaciones } from "./publicaciones.controller.js";
import { validarJWT } from "../herlpers/validar-jwt.js";
import { crearPublicacionValidator, editarPublicacionValidator, eliminarPublicacionValidator } from "../middlewares/publicacion-validator.js";

const router = Router();

router.post("/crearPublicacion/", [validarJWT, crearPublicacionValidator], crearPublicacion);
router.put("/editarPulicacion/:id", [validarJWT, editarPublicacionValidator], editarPublicacion);
router.delete("/eliminarPublicaion/:id", [validarJWT, eliminarPublicacionValidator], eliminarPublicacion);
router.get("/", obtenerPublicaciones);

export default router;