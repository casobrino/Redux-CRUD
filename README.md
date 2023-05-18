# CRUD usando Redux - ReactRouterDom, SweetAlert y React Vite

![Imagen de muestra del proyecto](./public/Captura.jpg)

Este Crud usa Json-Server como base de datos, para correrlo usa el comando
1. Clonar este repositorio
2. Instalar las dependencias necesarias con
>yarn

o 
>npm install
3. Levantar el servidor
>>> json-server --watch db.json

el cual lanzara el servidor en 
> http://localhost:3000/productos

El unico EndPoint disponible

## Ejecutar el proyecto

Levanta el proyecto con el comando 
>npm run dev

o
>yarn dev

Tecnologias utilizadas en este proyecto
* React Vite
* Redux
* React-Router-Dom
* SweetAlert2
* Json-Server
* Axios


Este proyecto tiene 2 reducers unidos en un unico store. El primer reducer es para los productos y el crud de estos, el sedundo reducer es para las alertas

