import Publicacion from "./publicaciones.model.js";
import { Categoria } from "../categoria/categoria.model.js";

export const crearPublicacion = async (req, res) => {
    try {
        const { titulo, categoria, texto } = req.body;
        const autor = req.usuario._id;

        let categoriaSeleccionada;
        if (categoria) {
            categoriaSeleccionada = await Categoria.findById(categoria);
            if (!categoriaSeleccionada) {
                return res.status(404).json({
                    success: false,
                    message: "Categoría no encontrada"
                });
            }
        } else {
            // Usa la categoría predeterminada si no se especifica una categoría
            categoriaSeleccionada = await Categoria.findOne({ nombre: "General" });
            if (!categoriaSeleccionada) {
                return res.status(500).json({
                    success: false,
                    message: "Categoría predeterminada no encontrada"
                });
            }
        }

        const nuevaPublicacion = new Publicacion({ titulo, categoria: categoriaSeleccionada._id, texto, autor });
        await nuevaPublicacion.save();

        res.status(201).json({
            success: true,
            publicacion: nuevaPublicacion
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al crear la publicación",
            error: err.message
        });
    }
};

export const editarPublicacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, categoria, texto } = req.body;
        const publicacion = await Publicacion.findById(id);

        if (!publicacion) {
            return res.status(404).json({
                success: false,
                message: "Publicación no encontrada"
            });
        }

        if (publicacion.autor.toString() !== req.usuario._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "No tienes permiso para editar esta publicación"
            });
        }

        let categoriaSeleccionada;
        if (categoria) {
            categoriaSeleccionada = await Categoria.findById(categoria);
            if (!categoriaSeleccionada) {
                return res.status(404).json({
                    success: false,
                    message: "Categoría no encontrada"
                });
            }
        } else {
            categoriaSeleccionada = publicacion.categoria;
        }

        publicacion.titulo = titulo;
        publicacion.categoria = categoriaSeleccionada._id;
        publicacion.texto = texto;
        await publicacion.save();

        res.status(200).json({
            success: true,
            publicacion
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al editar la publicación",
            error: err.message
        });
    }
};

export const eliminarPublicacion = async (req, res) => {
    try {
        const { id } = req.params;
        const publicacion = await Publicacion.findById(id);

        if (!publicacion) {
            return res.status(404).json({
                success: false,
                message: "Publicación no encontrada"
            });
        }

        if (publicacion.autor.toString() !== req.usuario._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "No tienes permiso para eliminar esta publicación"
            });
        }

        await Publicacion.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Publicación eliminada"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar la publicación",
            error: err.message
        });
    }
};

export const obtenerPublicaciones = async (_req, res) => {
    try {
        const publicaciones = await Publicacion.find().populate("autor", "nombre email");

        res.status(200).json({
            success: true,
            publicaciones
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al obtener las publicaciones",
            error: err.message
        });
    }
};