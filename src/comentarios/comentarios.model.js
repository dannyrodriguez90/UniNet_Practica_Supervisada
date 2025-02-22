import { Schema, model } from "mongoose";

const comentarioSchema = new Schema({
    texto: {
        type: String,
        required: [true, "El texto del comentario es requerido"]
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },
    publicacion: {
        type: Schema.Types.ObjectId,
        ref: "Publicacion",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model("Comentario", comentarioSchema);