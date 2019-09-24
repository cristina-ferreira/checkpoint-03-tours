const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
  