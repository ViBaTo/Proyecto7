# Proyecto7

## Endpoints

### Usuarios
- **GET /api/v1/users**: Obtener todos los usuarios
- **POST /api/v1/users/register**: Registrar un nuevo usuario
- **POST /api/v1/users/login**: Iniciar sesión
- **PUT /api/v1/users/:id**: Actualizar el rol de un usuario
- **DELETE /api/v1/users/:id**: Eliminar un usuario

### Proyectos
- **GET /api/v1/projects**: Obtener todos los proyectos
- **POST /api/v1/projects**: Crear un nuevo proyecto
- **PUT /api/v1/projects/:id**: Actualizar un proyecto
- **DELETE /api/v1/projects/:id**: Eliminar un proyecto

### Productos
- **GET /api/v1/products**: Obtener todos los productos
- **POST /api/v1/products**: Crear un nuevo producto
- **PUT /api/v1/products/:id**: Actualizar un producto
- **DELETE /api/v1/products/:id**: Eliminar un producto
- **GET /api/v1/products/project/:projectId**: Obtener productos por proyecto
