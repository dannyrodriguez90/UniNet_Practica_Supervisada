import Comentario from "./comentarios.model.js";
import Publicacion from "../publicaciones/publicaciones.model.js";

export const agregarComentario = async (req, res) => {
    try {
        const { id } = req.params;
        const { texto } = req.body;
        const autor = req.usuario._id;

        const publicacion = await Publicacion.findById(id);

        if (!publicacion) {
            return res.status(404).json({
                success: false,
                message: "Publicación no encontrada"
            });
        }

        const nuevoComentario = new Comentario({ texto, autor, publicacion: id });
        await nuevoComentario.save();

        res.status(201).json({
            success: true,
            comentario: nuevoComentario
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al agregar el comentario",
            error: err.message
        });
    }
};

export const editarComentario = async (req, res) => {
    try {
        const { id, comentarioId } = req.params;
        const { texto } = req.body;
        const usuarioId = req.usuario._id;

        const comentario = await Comentario.findById(comentarioId);

        if (!comentario) {
            return res.status(404).json({
                success: false,
                message: "Comentario no encontrado"
            });
        }

        if (comentario.autor.toString() !== usuarioId.toString()) {
            return res.status(403).json({
                success: false,
                message: "No tienes permiso para editar este comentario"
            });
        }

        comentario.texto = texto;
        comentario.fechaActualizacion = Date.now();
        await comentario.save();

        res.status(200).json({
            success: true,
            comentario
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al editar el comentario",
            error: err.message
        });
    }
};

export const eliminarComentario = async (req, res) => {
    try {
        const { comentarioId } = req.params;
        const usuarioId = req.usuario._id;

        const comentario = await Comentario.findById(comentarioId);

        if (!comentario) {
            return res.status(404).json({
                success: false,
                message: "Comentario no encontrado"
            });
        }

        if (comentario.autor.toString() !== usuarioId.toString()) {
            return res.status(403).json({
                success: false,
                message: "No tienes permiso para eliminar este comentario"
            });
        }

        await Comentario.findByIdAndDelete(comentarioId);
        await Publicacion.findByIdAndUpdate(comentario.publicacion, {
            $pull: { comentarios: comentarioId }
        });

        res.status(200).json({
            success: true,
            message: "Comentario eliminado"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el comentario",
            error: err.message
        });
    }
};