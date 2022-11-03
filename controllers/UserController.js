//Dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
///el modelo
const UserModel = require('../models/user')

//crear la entidad:
const User = UserModel(sequelize,DataTypes)

//listar todos los users
exports.getAllUser = async (req, res) => {
    try {
            //Traer todos los users
            const users = await User.findAll();
            //Response con todos los datos
            res
                .status(200)
                .json({
                    "succes": true,
                    "data": users
                })
    } catch (error) {
            res 
                .status(400)
                .json({
                    "success": false,
                    "errors": "error de servidor desconocido"
        })
    }
}

//listar user por id
exports.getSingleUser = async (req,res)=>{
    //console.log(req.params.id)
    try {
        const singleUser = await User.findByPk(req.params.id);
        if(singleUser){
        res.
                status(200)
                .json({
                    "success": true,
                    "data":singleUser
        })
    }else{
        res.
                status(200)
                .json({
                    "success": true,
                    "data": "usuario no existente"


            }) 
        }
    }catch (error) {
        res 
                .status(400)
                .json({
                    "success": false,
                    "errors": "error de servidor"
    })
    
    }
}

//actualizar user por id
exports.updateUser = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "succes":   false,
                "error": "Error el usuario no existe"
                })  
            
        } else {
            await User.update(req.body,  {
                where: {
                 id: req.params.id
                }
              });
             
            res
                .status(200)
                .json({
                    "success": true,
                    "data": SingleUser
                })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "succes":   false,
            "error": "Error de conexion con el servidor"
            })
    }
}

//eliminar user por id
exports.deleteUser = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleUser = await User.findByPk(req.params.id);
        if (!SingleUser) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await User.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deleteUser = await User.findByPk(req.params.id);

            res
            .status(200)
            .json({
                "success": true,
                "data": SingleUser
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

//crear nuevo user
exports.createUser = async (req,res)=>{
    try {
        const newUser = await User.create(req.body)
        res
            .status(200)
            .json({
                "success": true,
                "data":newUser
        })
        
    } catch (error) {
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores
            //map
            const errores = error.errors.map((elemento)=>{return elemento.message })        
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": error
                }) 
        }else{
            res 
                .status(400)
                .json({
                    "success": false,
                    "errors": "error de servidor"
                })
            }
        }
    }
