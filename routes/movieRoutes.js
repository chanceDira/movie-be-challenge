const express = require('express');
const movieController = require('../controllers/movieController');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello movie api');
});

router.get('/api', (req, res) => {
    res.send('Hello, this is working');
});

/**
 * @swagger
 * /movies:
 *   get:
 *     description: Get all movies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array of movies
 */
router.get('/movies', movieController.getAllMovies);
/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     description: Get a single movie by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Movie ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single movie
 */
router.get('/movies/:id', movieController.getMovieById);
/**
 * @swagger
 * /movies:
 *   post:
 *     description: Create a new movie
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: movie
 *         description: Movie object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Movie'
 *           example:
 *             title: "Sample Movie"
 *             year: 2022
 *             image: "sample-image.jpg"
 *     responses:
 *       200:
 *         description: Created movie
 */
router.post('/movies', movieController.createMovie);
/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     description: Update a movie by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Movie ID
 *         in: path
 *         required: true
 *         type: string
 *       - name: movie
 *         description: Updated movie object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Movie'
 *           example:
 *             title: "Updated Movie Title"
 *             year: 2023
 *             image: "updated-image.jpg"
 *     responses:
 *       200:
 *         description: Updated movie
 */
router.put('/movies/:id', movieController.updateMovie);
/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     description: Delete a movie by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Movie ID
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Deleted movie
 */
router.delete('/movies/:id', movieController.deleteMovie);

module.exports = router;
