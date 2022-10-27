//Dependencias:
//el objeto de conexion:
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const { DataTypes } = require('sequelize')
///el modelo
const UserModel = require('../models/user')

//crear la entidad:
const User = UserModel(sequelize,DataTypes)


//listar todos los users
exports.getAllUser = async (req, res) => {
    //Traer todos los users
    const users = await User.findAll();
    //Response con todos los datos
    res
        .status(200)
        .json({
            "succes": true,
            "data": "aqui van a salir todos los user"
        })
}

//listar user por id
exports.getSingleUser = async (req,res)=>{
    //console.log(req.params.id)
    const singleUser = await User.findByPk(req.params.id);
    res.
        status(200)
        .json({
            "success": true,
            "data":singleUser
        })
}

//actualizar user por id
exports.updateUser = async  (req,res)=>{

    await User.update(req.body, {
    where: {
        id: req.params.id
    }
});
const singleUser = await User.findByPk(req.params.id);

//console.log(req.params.id)
res.
        status(200)
        .json({
            "success": true,
            "data": singleUser
        })
    }
//eliminar user por id
exports.deleteUser = async (req,res)=>{
const singleUser = await User.findByPk(req.params.id); 
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.
        status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

//crear nuevo user
exports.createUser = async (req,res)=>{

    const newUser = await User.create(req.body)
        res
        .status(200)
        .json({
            "success": true,
            "data":newUser
        })
}
