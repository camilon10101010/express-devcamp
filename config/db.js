const sequelize = require('./seq')
const { DataTypes } = require('sequelize')

//crear instancia del modelo
const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes)
//definir la funcion de conexion a la base
//de datos

const connectDB = async ()=>{
    try{
        //conectarse a la bd
    
        await sequelize.authenticate() 
        console.log('conectado a mysql')
        const jane = await User.create({
                username: "Samuel",
                email: 'samuel@misena.edu.co',
                password: '123456'
            });
            console.log("Jane's auto-generated ID:", jane.id);

    }catch(error){
        console.log(error)
    } 
}

connectDB()