//Dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
///el modelo
const CourseModel = require('../models/courses')
const courses = require('../models/courses')

//crear la entidad:
const Course = CourseModel(sequelize,DataTypes)

//listar todos los Courses
exports.getAllCourse = async (req,res) => {
    try {
            //traer todos los course
            const courses = await Course.findAll();
            //Response con todos los datos
            res
                .status(200)
                .json({
                    "succes": true,
                    "data": courses
                })
    } catch (error) {
        res
            .status(400)
            .json({
                "succes":false,
                "errors": error
            })
        
    }
}

//listar course por id
exports.getSingleCourse = async (req,res)=>{
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if(singleCourse){
            res
                .status(200)
                .json({
                    "succes": true,
                    "data": singleCourse
                })
        }else{
            res.
                    status(200)
                    .json({
                        "success": false,
                        "data": "course no existente"
                }) 
            }
    } catch (error) {
        res 
        .status(400)
        .json({
            "succes": false,
            "errors": "error de servidor"
        })
    }
}

//actualizar course por id
exports.updateCourse = async (req, res)=>{
    try {
        const SingleCourse = await Course.findByPk(req.params.id);
        if (!SingleCourse) {
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el course no existe"
                })  
            
        } else {
            await Course.update(req.body,  {
                where: {
                 id: req.params.id
                }
              });
             
            res
                .status(200)
                .json({
                    "succes": true,
                    "data": SingleCourse
                })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "succes":   false,
            "error": error
            })
    }
}

//eliminar course por id
exports.deleteCourse = async (req, res)=>{
    try {
        const SingleCourse = await Course.findByPk(req.params.id);
        if (!SingleCourse) {
            res
            .status(400)
            .json({
                "succes": false,
                "errors": "Course no existente"
        })
        } else {
            await Course.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deleteCourse = await Course.findByPk(req.params.id);

            res
            .status(200)
            .json({
                "succes": true,
                "data": SingleCourse
            })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": " Error de servidor desconocido"
        })
    }
    
}

//crear nuevo course
exports.createCourse = async (req,res)=>{
    try {
        const newCourse = await Course.create(req.body)
        res
            .status(200)
            .json({
                "succes": true,
                "data":newCourse
        })
        
    } catch (error) {
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores
            //map
            const errores = error.errors.map((elemento)=>{return elemento.message })        
            res
                .status(400)
                .json({
                    "succes": false,
                    "errors": errores
                }) 
        }else{
            res 
                .status(400)
                .json({
                    "succecs": false,
                    "errors": "error de servidor"
                })
            }
        }
    }