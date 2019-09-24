const express = require('express');
const router = express.Router();
const { showTours, createTour, deleteTour, showTour, editTour } = require("../controllers/tours")
const { showCities, createCity, deleteCity, showCity, editCity } = require("../controllers/cities")

router.get('/tours' , showTours);
router.post('/tours/new', createTour);
router.get('/tour/:id/delete', deleteTour)
router.get('/tour/:id', showTour)
router.get('/tour/:id/edit', editTour);

router.get('/cities' , showCities);
router.post('/cities/new', createCity);
router.get('/city/:id/delete', deleteCity)
router.get('/city/:id', showCity)
router.get('/city/:id/edit', editCity);


module.exports = router;
