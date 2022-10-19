const express = require('express')

//definir objeto de ruteo
const router = express.Router()

//listar todos los courses
router.get('/' , (req,res)=>{
    res.
        status(200)
        .json({
            "success": true,
            "data":"aqui van a salir todos los courses"
        })
})

//listar course por id
router.get('/:id' , (req,res)=>{
    console.log(req.params.id)
    res.
        status(200)
        .json({
            "success": true,
            "data":"aqui va a salir el course por id"
        })
})

//actualizar por id
router.put('/:id' , (req,res)=>{
    console.log(req.params.id)
    res.
        status(200)
        .json({
            "success": true,
            "data":`aqui va a actualizarse el course cuyo id es${req.params.id}`
        })
})

//eliminar por id
router.delete('/:id' , (req,res)=>{
    console.log(req.params.id)
    res.
        status(200)
        .json({
            "success": true,
            "data":`aqui va a borrarse el course cuyo id es ${req.params.id}`
        })
})

//crear nuevo course
router.post('/' , (req,res)=>{
    res.
        status(200)
        .json({
            "success": true,
            "data":"aqui se va a crear courses"
        })
})

module.exports = router