//! CODE REVIEW - SERVUDIRES

//* Comenzamos a repasar cómo podemos levantar nuestro servidor y cómo podemos hacer las peticiones y configrarlo correctamente cómo se pidió en la clase anterior.

//^ Middleware

//* Cómo se indica con su nonbre, es algo que esta en medio, maneja peticiones en la etapa de flujo que esta entre la ruta al controlador, ya que se encargan de asegurarse de que la información ingresada no comprometa la base de datos ya que en el controlador se ingresa a la base de datos con información sensible cuándo se pasan los middlewares.

//* Ahora en clase usaremos dos herramientas para middlewares, morgan y core, morgan sirve para poder recibir mejor las respuestas del servidor, Cors sirve para las validaciones antes de entrar al servidor.

//
//* El fliujo de código va desde el controlador, que maneja
