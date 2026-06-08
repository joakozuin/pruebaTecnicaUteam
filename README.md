# Prueba Técnica React - Uteam

## Descripción

Aplicación web desarrollada con React y Vite que consume información desde la API REST de JSONPlaceholder.

La aplicación permite visualizar usuarios obtenidos desde una API externa y realizar operaciones CRUD sobre ellos mediante una interfaz moderna y responsive.

## Tecnologías utilizadas

* React
* Vite
* JavaScript ES6+
* CSS3
* Fetch API
* JSONPlaceholder

## Funcionalidades

### Lectura de datos (READ)

* Obtención de usuarios desde:
  https://jsonplaceholder.typicode.com/users
* Visualización mediante tarjetas responsivas.

### Creación de usuarios (CREATE)

* Formulario para registrar nuevos usuarios.
* Campos:

  * Nombre
  * Email
  * Teléfono

### Edición de usuarios (UPDATE)

* Modificación del nombre de usuarios existentes.

### Eliminación de usuarios (DELETE)

* Eliminación de usuarios desde la interfaz.

## Estructura del proyecto

src/

├── components/

│ ├── UserCard.jsx

│ ├── UserCard.css

│ ├── UserList.jsx

│ ├── UserList.css

│ ├── UserForm.jsx

│ └── UserForm.css

├── pages/

│ ├── UsersPage.jsx

│ └── UsersPage.css

├── services/

│ └── userService.js

├── App.jsx

└── App.css

## Componentes

La aplicación implementa componentes anidados:

App

└── UsersPage

└── UserList

└── UserCard

Además incluye el componente UserForm para la creación de usuarios.

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd nombre-del-proyecto
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

## Autor

Joaquín Zuin

