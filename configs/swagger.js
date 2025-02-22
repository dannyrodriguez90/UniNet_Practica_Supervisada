import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "UniNet API",
            version: "1.0.0",
            description: "API para gestionar opiniones",
            contact:{
                name: "Danny Rodriguez",
                email: "drodriguez-2020522@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:3001/uniNet/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/clientes/cliente.routes.js",
        "src/comentarios/comentario.routes.js",
        "./src/publicaciones/publicacion.routes.js",
        "src/categories/categories.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}