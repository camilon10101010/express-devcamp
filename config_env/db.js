const mongoose = require('mongoose')
const mongoose = require('mongoose')

//const uri = 'mongodb+srv://camilo20:camilo1031643099@cluster0.v0slrcp.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'
const uri = 'mogodb://localhost:27017/bootcamps-sena'

//componentes de conexion a BD
//tipo: funcional

const connectDB = async () => {
    const conn = await mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Conectado: ${conn.connection.host}`)
}
connectDB()


