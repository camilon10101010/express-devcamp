const express = require('express')
const { 
        getAllUser,
        getSingleUser,
        updateUser,
        deleteUser,
        createUser
} = require('../controllers/UserController.js')

//definir objeto de ruteo 
const router = express.Router()

//crear rutas sin parametro
router.route ('/')
            .get(getAllUser)
            .post(createUser)

//crear  rutas con parametro
router.route ('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)
module.exports = router