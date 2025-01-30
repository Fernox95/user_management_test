# user_management_test

React test

Backend con FastAPI
Frondend con Next.JS y MaterialUI


Ejecución de la aplicación:

1.- Moverse a la carpeta backend y ejecutar el siguiente comando:
    fastapi dev main.py

2.- Moverse a la carpeta frontend y ejecutar el siguiente comando:
    npm run dev

3.- Se podrá acceder a la aplicación a través del siguiente link:
    http://localhost:3000/


********************************************************************************
Implementación y retos

Para la implementanción tanto del backend como del frontend, utilicé lo ya mencionado debido a la experiencia que tengo utilizando ambos frameworks. 

Respecto al backend, la solución propuesta fue implementar un arreglo en vez de una base de datos, debido al sencillo acceso a la información y no fue necesario realizar mas configuraciones de las ya hechas. El desarrollo de los endpoints es de un CRUD sencillo que permite la manipulación de los datos tanto para crear, actualizar y eliminar usuarios.

Para el frontend, se utilizó Next.JS debido a la fácil implementación del enrutamiento para las distintas vistas o páginas, además que al utilizar Material UI se estructuran rápidamente los componentes importando solamente lo necesario.

Hizo falta la implementación del mapa para la direcciones, la subida de imágenes y el filtrado de la información debido a que me hace falta tener algo más de experiencia en el frontend para estas implementaciones, que podría lograrlas con algo más de tiempo para investigar como realizar estas funcionalidades.
