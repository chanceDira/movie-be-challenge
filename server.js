const express = require('express')
const mongoose = require('mongoose')
const Movie = require('./models/movieModel')
const app = express()
require('dotenv').config();

const connectionString = process.env.MONGODB_URI;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Hello movie api')
})

app.get('/api', (req, res) => {
    res.send('Hello, this is working')
})

app.get('/movies', async(req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/movies/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const movie = await Movie.findById(id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/movies', async(req, res) => {
    try {
        const movie = await Movie.create(req.body)
        res.status(200).json(movie);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// update a movie
app.put('/movies/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findByIdAndUpdate(id, req.body);
        // we cannot find any movie in database
        if(!movie){
            return res.status(404).json({message: `cannot find any movie with ID ${id}`})
        }
        const updatedMovie = await Movie.findById(id);
        res.status(200).json(updatedMovie);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a movie

app.delete('/movies/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const movie = await Movie.findByIdAndDelete(id);
        if(!movie){
            return res.status(404).json({message: `cannot find any movie with ID ${id}`})
        }
        res.status(200).json(movie);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)
mongoose.
connect(process.env.MONGODB_URI)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Movie app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})