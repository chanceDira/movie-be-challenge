const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');
const authRoutes = require("./routes/authRoutes");
const cors = require('cors'); 
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css"

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors()); 

app.use('/api', movieRoutes);
app.use("/api", authRoutes);

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, { customCssUrl: CSS_URL }));


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
