const Sequelize = require('../config/seq')
const { DataTypes, ValidationError } = require('sequelize')
const ReviewModel = require('../models/reviews')
const Reviews = ReviewModel(Sequelize,DataTypes)


exports.createReviews = async (req, res) => {
    try {
        const newreviews = await Reviews.create(req.body)
     
            res
            .status(200)
            .json({
            "succes" : true,
            "data" : newreviews
            })
    } catch (error) {
        if(error instanceof ValidationError){
            const errores = error.errors.map((elemento) => elemento.message)
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
                "succes": false,
                "errors": "error de servidor"
                 })
        }
    }
   
}


exports.getAllReviews = async (req, res) => {
try {
    const reviews = await Reviews.findAll();
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : reviews
        })
} catch (error) {
    res
    .status(400)
    .json({
        "succes": false,
        "errors": error
         })
}

    
}

exports.getSingleReviews = async (req, res) => {
try {
    const singleReviews = await Reviews.findByPk(req.params.id);
    if(singleReviews){
    res
        .status(200)
        .json({
            "succes" : true,
            "data" : singleReviews
        })

}else{
    res
    .status(00)
    .json({
        "succes": false,
        "errors": "reviews no existente"
        })
        }
} catch (error) {
    res
    .status(400)
    .json({
        "succes": false,
        "errors": "error servidor desconocido"
         })
}

    

}

exports.updateReviews = async (req, res)=>{
    try {
     const singleReviews = await Reviews.findByPk(req.params.id);
     if(!singleReviews){
         res
         .status(400)
         .json({
             "success": false,
             "errors": "reviews no existe"
         })
     }else{
     await Reviews.update(req.body, {
         where: {
           id: req.params.id
         } });
         const updatedReviews = await Reviews.findByPk(req.params.id)
       res
       .status(200)
       .json({
           "success": true,
           "data": updatedReviews
       }) 
     }
      
    } catch (error) {
     res
         .status(400)
         .json({
             "success": false,
             "errors": error
         })
    }
 }

exports.deleteReviews = async (req, res)=>{
    try {
        const SingleReviews = await Reviews.findByPk(req.params.id);
        if (!SingleReviews) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Reviews no existente"
        })
        } else {
            await Reviews.destroy({
                where: {
                    id: req.params.id
                }
              });
        const deleteReviews = await Reviews.findByPk(req.params.id);

            res
            .status(200)
            .json({
                "success": true,
                "data": SingleReviews
            })
        }
    } catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": error
        })
    }
    
}