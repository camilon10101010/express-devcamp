const Sequelize = require('sequelize')
const dotenv = require('dotenv')

//definir un objet
dotenv.config({path: './config_env/config.env' })

//definir un onjeto de cpnexion:
const sequelize = new  Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host:process.env.DATABASE_HOST,
        dialect: 'mysql',
    }
)

//console.log(sequelize)
module.exports = sequelize