# Proyecto7

## Descripción

Proyecto7 es una API RESTful desarrollada para gestionar usuarios, proyectos y productos. La API está diseñada para ser utilizada como backend en aplicaciones web y móviles, proporcionando un conjunto completo de endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las entidades mencionadas. Además, la API implementa autenticación y autorización mediante JSON Web Tokens (JWT) para proteger las rutas y garantizar que solo los usuarios autorizados puedan acceder a ciertas funcionalidades.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework web para Node.js, utilizado para construir la API REST.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar la información de usuarios, proyectos y productos.
- **Mongoose**: Librería de modelado de datos para MongoDB, utilizada para interactuar con la base de datos de manera sencilla.
- **JSON Web Tokens (JWT)**: Tecnología utilizada para la autenticación y autorización de usuarios.
- **bcrypt**: Herramienta para encriptar contraseñas y garantizar la seguridad de las credenciales de usuario.
- **dotenv**: Carga variables de entorno desde un archivo `.env` para configurar el entorno de ejecución.

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/Proyecto7.git
   cd Proyecto7

   ```

2. **Instalar dependencias**

Asegúrate de tener Node.js y npm instalados en tu sistema. Luego, ejecuta:

npm install

3. **Configurar las variables de entorno**

Crea un archivo .env en la raíz del proyecto y configura las siguientes variables:
PORT=3003
MONGODB_URI=mongodb://localhost:27017/proyecto7
JWT_SECRET=your_jwt_secret_key

4. **Iniciar el servidor**
   npm run dev

# Endpoints

### Usuarios

**GET /api/v1/users**: Obtener todos los usuarios (Requiere isAdmin)
**POST /api/v1/users/register**: Registrar un nuevo usuario
**POST /api/v1/users/login**: Iniciar sesión y obtener un token JWT
**PUT /api/v1/users/**
: Actualizar el rol de un usuario (Requiere isAdmin)
**DELETE /api/v1/users/**
: Eliminar un usuario (Requiere isAdmin)

### Proyectos

**GET /api/v1/projects**: Obtener todos los proyectos
**POST /api/v1/projects**: Crear un nuevo proyecto
**PUT /api/v1/projects/**
: Actualizar un proyecto existente (Requiere isAdmin)
**DELETE /api/v1/projects/**
: Eliminar un proyecto (Requiere isAdmin)

### Productos

**GET /api/v1/products**: Obtener todos los productos
**POST /api/v1/products**: Crear un nuevo producto (Requiere isAuth)
**PUT /api/v1/products/**
: Actualizar un producto existente (Requiere isAuth)
**DELETE /api/v1/products/**
: Eliminar un producto (Requiere isAuth)
**GET /api/v1/products/project/**
: Obtener productos asociados a un proyecto específico

## Ejemplos de Uso

_Registro de un Usuario_:

curl -X POST http://localhost:3003/api/v1/users/register \
-H "Content-Type: application/json" \
-d '{
"name": "John Doe",
"email": "johndoe@example.com",
"password": "password123",
"role": "comercial"
}'

_Iniciar Sesión_:

curl -X POST http://localhost:3003/api/v1/users/login \
-H "Content-Type: application/json" \
-d '{
"email": "johndoe@example.com",
"password": "password123"
}'
Esto devolverá un token JWT que deberás usar para acceder a las rutas protegidas.

_Acceder a Productos con Autenticación_:

curl -X GET http://localhost:3003/api/v1/products \
-H "Authorization: Bearer <tu_token_jwt>"
