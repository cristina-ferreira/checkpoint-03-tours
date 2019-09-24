const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: false
        },

        tourId: {
            type: Schema.Types.ObjectId,
            path: 'Tour',
            required: true
        }
    },
    
    {
        timestamps: true
    }
)

const City = mongoose.model('City', citySchema);

module.exports = City;