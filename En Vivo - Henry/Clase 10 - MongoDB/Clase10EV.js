//! LECTURE - MONGODB

//* En esta clase vamos a empezar a introducir la base de datos noSQL ( Not Only SQL) osea, no solo relacionales, lo elementos principales de MongoDB y sus herramientas (MongoDB Atlas y Compass), antes de comprender que es MongoDB y su funcionamiento primero debemos comprender sus términos.

//^ ¿Qué es SQL? (Structured Query Language)
//* MongoDB no es SQL pero debemos comprender que es SQL primero, SQL es el lenguaje que usan las bases de datos para comuncicarse, NosQL no sigue las reglas de los lenguajes SQL tradicionales, tienen sus virtudes cómo poder tenre más libertas al no seguir un patrón estructurado.

//^ ¿Cuándo usar bases de datos NoSQL?

//* Cuándo tengamos que datos flexibles, o los datos no sigan un mismo formato estrictamente, se necesite una mayor cantidad de espacio o datos, se necesita que se adapte rápidamente, se puedan agregar servidores o nodos fácilmente o querramos distribuir la carga de tráfico y trabajo entre los distintos servicios.

//^ Bases de datos Existentes

//* Existen varías bases de datos populares, nosotros usaremos a MongoDB, aunque también se usa mucho Cassandra, Neptune, Amazon y Redix.

//^ Estructuración de datos en MongoDB

//* Los datos en MongoDB se estructuran en forma de documento siendo parecido a JSON, se pueden tener campos de datos y a la vez varios campos de datos pueden estar dentro de una misma colección, colecciones e scómo se orgaiza un conjunto de datos, pueden tener una diferente o igual estructura entre todos los datos.

//* Los datos que podemos hablar son todos los valores primitivos de JS, Números, strings, booleanos, etc pero también documentos anidados.

//^ Introducción a MongoDB

//* MongoDB es un sistema de bases de datos tipo NoSQL, esta orientada a almacenar datos en forma de documento, y en formato BSON (Binary JSON), ayuda a simplificar mucho el proceso para crear bases de datos, y su aplicación cuenta con una gran interfaz de usuario y aplicaciones ayudandola a ser más intuitiva.

//^ Caracteristicas principales

//* Utiliza un esquema dinámico, definido con tablas de relaciones predefinidas, usa documentos y colecciones, los datos son modificados segun las necesidades, usa formato BSON, mejora la eficiencia de transferencia de datos, serializa binariamente los documentos tipo JSON, y idexa para mejorar la velocidad de interacción con los datos.

//^ Los elemetnos de MongoDB

// DOCUMENTO
//* Es la unidad básica de almacenamiento tipo BSON, esta formado por clave-valor y puede ser cualquier tipo de dato

// COLECCIÓN
//* Son un conjunto de documentos almacenados y relacionados entre sí, son accesibles por operaciones de CRUD.

// REFERENCIAS
//* Existen referencias que vinculas documentos de diferentes colecciones, por ejemplo sí una tabla de artistas tiene un artista que aparece en otra de nuestras tablas podemos establecer una referencias entre esas tablas.

//^ MongoDB Atlas

//* Es un servicio en la nube para las bases de datos de MongoDB, despliega la base para elegir un servidor de la nube y su región, ofrece la capacidad de escalar horizontalmente automaticamente, incorpora caracteristicas de seguridad avanzadas, realiza respaldos de seguridad periodicamente y permite la recuperación de datos en caso de pérdida o errores.

//^ Creación de cuenta MongoDB Atlas

//* 