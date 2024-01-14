const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors'); 
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');
require('dotenv').config();

const connectionString = process.env.MONGODB_URI;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors()); 

app.use('/api', movieRoutes);

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const port = process.env.PORT || 4000;

mongoose.set('strictQuery', false);
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to MongoDB');
        app.listen(port, () => {
            console.log(`Movie app is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
