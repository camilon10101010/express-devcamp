//1. Crear el objeto express
const express = require('express')
//2. Citar las dependencias necesarias
const dotenv = require ('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const listEnpoint = require ('express-list-endpoints')
//losc omponentes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
const courseRoutes = require('./routes/CourseRoutes')
const userRoutes = require('./routes/UserRoutes')

//3. Establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
//console.log(process.env.PORT)


//crear el objeto application
//para el servidor de desarrollo
const app = express()
//validemos el objeto application
//para recibir datos enn formato json
app.use(express.json()) 
//conexioon a bd
connectDB()

//rutas del proyecto
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/users', userRoutes)

// endpoint de aplicacion
app.get('/' , (request, response) => {
    response
        .status(200)
        .json({
            "success": true,
            "data" : "request exitosa"
        })
        send('Ruta funcional')
})

//imprimir la lista de enpoints 
//validas del proyectp
console.log(listEnpoint(app))

//ejecutar el servidor de desarrollo
//parametros:
//      puertp de escucha - listen
app.listen(process.env.PORT, ()=>{
    console.log(`servidor activo en puerto 5000`.bgGreen)
})

