const City = require("../models/City")


const showCities = (req, res, next) => {
    City.find({}, (err, foundCities) => {
        if (err) {
            res.json({error: err});
        }
        res.json({city: [foundCities]});
    });
 };


const createCity = (req, res) => {
    City.find({ name: req.body.name }, (error,foundCities) => {
        if (error) {
            return res.json({error: error});
        }
        if (foundCities.length !== 0) {
            return res.json({error: "City already exists."});
        }
        City.create([req.body], (err, createdCity) => {
            if (err) {
                res.json({error: err});
            }
            res.json({city: createdCity})
        })
    }) 
}

const deleteCity = (req, res, next) => {
    City.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
        res.json({error: "City not deleted."});
        }
    
        res.json({message: "city deleted"});
    })
}


const showCity = (req, res, next) => {
    City.findById(req.params.id, (err, foundCity) => {
        if (err) {
            res.status(500).json({error: err});
        }
        res.json({city: foundCity});
    });
};


const editCity = (req, res, next) => {
    City.findById(req.params.id, (err, foundCity) => {
        if (err) {
            res.status(500).json({error: err});
        }
        foundCity.name = req.body.name;
        foundCity.description= req.body.description;
        foundCity.tourId= req.body.tourId;
        foundCity.save((err,savedCity) => {
            if(err) {
                res.status(500).json({error: err});
            }
            res.json({city: savedCity});
        });
    });
};

module.exports = { createCity, showCities, deleteCity, showCity, editCity };
