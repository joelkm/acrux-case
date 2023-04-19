# Caso práctico Acrux

Hola 👋, soy Joel y este es el repositorio para el caso práctico de Acrux

Para probar el código clonar el repositiorio en tu equipo, cambia el nombre del archivo ".env.example" a ".env" (normalmente iria en .gitignore, pero lo dejo para que se pueda probar), y en el directorio correspondiente ejecuta:

```
npm i
npm run start
```

El servidor se arrancará en http://localhost:8000

## STACK:

APP: Node.js + Express.js
DB: MongoDB (Atlas)
ODM : Mongoose
+
Validación con JOI

## Documentación

Iba a escribir la documentación con Swagger, pero para dos cositas que hay que explicar lo hago por aquí.

- GET /event --> Devuelve todos los eventos registrados en la base de datos

- GET /event/date/:value --> Devuelve los eventos registrados en una fecha. El formato de la fecha es YYYY-MM-DD

- GET /event/location/:value --> Devuelve los eventos registrados en una localización

- POST /event --> Registra un evento. El cuerpo de la request seria algo similar a: { "name": "nombre", "date": "YYYY-MM-DD", "location": "location" }. Validado con Joi
