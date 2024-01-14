const mongoose = require('mongoose')

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a movie name"]
        },
        year: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Movie= mongoose.model('Movie', movieSchema);

module.exports = Movie;