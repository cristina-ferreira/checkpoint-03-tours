
const Tour = require("../models/Tour")
const City = require("../models/City")


const showTours = (req, res, next) => {
    Tour.find({}, (err, foundTours) => {
        if (err) {
            res.json({error: err});
        }
        res.json({tour: [foundTours]});
    });
 };

const createTour = (req, res) => {
    Tour.find({ name: req.body.name }, (error,foundTours) => {
        if (error) {
            return res.json({error: error});
        }
        if (foundTours.length !== 0) {
            return res.json({error: "Tour already exists."});
        }
        Tour.create([req.body], (err, createdTour) => {
            if (err) {
                res.json({error: err});
            }
            res.json({tour: createdTour})
        })
    }) 
}

const deleteTour = (req, res, next) => {
    Tour.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            res.json({error: "Tour not deleted."});
        }
    
        res.json({status: 'OK' })
    })
}

const showTour = (req, res, next) => {
    City.find({ tourId: req.params.id }, (error, foundCity) => {
        console.log(req.params.id);
        if (error) {
            res.status(500).json({ error: error })
        }
        Tour.findById(req.params.id, (err, foundTour) => {
            if (err) {
                res.status(500).json({ error: err })
            }
            res.json({ tour: foundTour, city: foundCity });
        })
    })
 };

const editTour = (req, res, next) => {
    Tour.findById(req.params.id, (err, foundTour) => {
        if (err) {
            res.status(500).json({error: err});
        }
        foundTour.name = req.body.name;
        foundTour.save((err,savedTour) => {
            if(err) {
                res.status(500).json({error: err});
            }
            res.json({tour: savedTour});
        });
    });
};

module.exports = { createTour, showTours, deleteTour, showTour, editTour };
