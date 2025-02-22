
# Proyecto UniNet API

Este proyecto es una API construida en Node.js utilizando Express y MongoDB. Permite gestionar usuarios, publicaciones, comentarios y categorías para una plataforma universitaria.

## Instalación

## Descripción
Este proyecto es una API para la gestión de usuarios, autenticación, publicaciones, comentarios y categorías. Está construido con Node.js, Express y MongoDB.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/UniNet_Practica_Supervisada.git
Para comenzar, necesitas clonar el repositorio y instalar las dependencias.

1. Clona el repositorio:
   ```bash
   git clone <url_del_repositorio>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   PORT=3001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Asegúrate de reemplazar `your_mongodb_connection_string` y `your_jwt_secret` con tus valores reales.

## Uso

Inicia el servidor con el siguiente comando:

```bash
npm start
```

La API estará disponible en: `http://localhost:3001/uniNet/v1`.

### Documentación de la API

La documentación de la API está generada automáticamente con Swagger y estará disponible una vez que el servidor esté en funcionamiento. Puedes acceder a ella en la siguiente URL:

```
http://localhost:3001/api-docs
```

## Rutas de la API

### Autenticación
- `POST /uniNet/v1/auth/register`: Registrar un nuevo usuario.
- `POST /uniNet/v1/auth/login`: Iniciar sesión.

### Clientes
- `GET /uniNet/v1/cliente/findUser/:uid`: Obtener usuario por ID.
- `GET /uniNet/v1/cliente/`: Obtener todos los usuarios.
- `PUT /uniNet/v1/cliente/updatePassword/:uid`: Actualizar contraseña del usuario.
- `PUT /uniNet/v1/cliente/updateUser/:uid`: Actualizar datos del usuario.
- `PATCH /uniNet/v1/cliente/updateProfilePicture/:uid`: Actualizar foto de perfil del usuario.

### Publicaciones
- `POST /uniNet/v1/publicaciones/crearPublicacion`: Crear una nueva publicación.
- `PUT /uniNet/v1/publicaciones/editarPublicacion/:id`: Editar una publicación existente.
- `DELETE /uniNet/v1/publicaciones/eliminarPublicacion/:id`: Eliminar una publicación.
- `GET /uniNet/v1/publicaciones`: Obtener todas las publicaciones.

### Comentarios
- `POST /uniNet/v1/comentarios/agregarComentario/:id`: Agregar un nuevo comentario.
- `PUT /uniNet/v1/comentarios/editarComentario/:comentarioId/:id`: Editar un comentario existente.
- `DELETE /uniNet/v1/comentarios/eliminarComentario/:comentarioId/:id`: Eliminar un comentario.

### Categorías
- `POST /uniNet/v1/categoria/createCategory`: Crear una nueva categoría.
- `PUT /uniNet/v1/categoria/editCategory/:id`: Editar una categoría existente.
- `DELETE /uniNet/v1/categoria/deleteCategory/:id`: Eliminar una categoría.
- `GET /uniNet/v1/categoria/getCategories`: Obtener todas las categorías.

## Middlewares

El proyecto incluye varios middlewares para validar y procesar datos:

- `rate-limit-validator.js`: Middleware para limitar la tasa de solicitudes.
- `cliente-validator.js`: Middleware para validar datos de clientes.
- `multer-uploads.js`: Middleware para manejar la subida de archivos.
- `validar-jwt.js`: Middleware para validar JWT.
- `comentario-validator.js`: Middleware para validar datos de comentarios.
- `publicacion-validator.js`: Middleware para validar datos de publicaciones.
- `categoria-validator.js`: Middleware para validar datos de categorías.

  
- `auth.js`: Middleware para verificar si el usuario es administrador.


  ## Token
  x-token

  ## Admin
  email: admin@example.com
  password: adminpassword

