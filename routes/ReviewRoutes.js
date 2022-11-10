const express = require('express')
const { 
    getAllReviews,
    getSingleReviews,
    updateReviews,
    deleteReviews,
    createReviews
} = require('../controllers/ReviewsController.js')

//definir objeto de ruteo
const router = express.Router()

//crear rutas sin parametro
router.route ('/')
            .get(getAllReviews)
            .post(createReviews)
//crear rutas con parametro
router.route ('/:id')
            .get(getSingleReviews)
            .put(updateReviews)
            .delete(deleteReviews)
module.exports = router