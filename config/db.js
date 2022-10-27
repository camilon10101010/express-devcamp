const sequelize = require('./seq')

const connectDB = async ()=>{
    try{
        //conectarse a la bd
    
        await sequelize.authenticate() 
        console.log('conectado a mysql')
    }catch(error){
        console.log(error)
    } 
}

module.exports = connectDB