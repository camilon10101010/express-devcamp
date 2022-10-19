//1. Crear el objeto express
const express = require('express')
//2. Citar las dependencias necesarias
const dotenv = require ('dotenv')
const colors = require('colors')
const listEnpoint = require ('express-list-endpoints')
//losc omponentes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
const courseRoutes = require('./routes/CourseRoute')

//3. Establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
//console.log(process.env.PORT)


//crear el objeto application
//para el servidor de desarrollo
const app = express()

//rutas
app.use('/api/v1/bootcamps' , bootcampRoutes)

app.use('/' , (request , res)=>
{
    res
        .status(200)
        .json({
            "success" : true,
            "data" : "request exitosa"
        })
})

//rutas
app.use('/api/v1/course' , courseRoutes)

app.use('/' , (request , res)=>
{
    res
        .status(200)
        .json({
            "success" : true,
            "data" : "request exitosa"
        })
}) 


//endpoints de dominio
//bootcamp

//listar todos los bootcamps






app.get('/api/v1/bootcamps/:id' , (req,res)=>{
    console.log(req.params.id)
    res.
        status(200)
        .json({
            "success": true,
            "data":`aqui va a salir el bootcamp cuyo id es ${req.params.id}`
        })
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

