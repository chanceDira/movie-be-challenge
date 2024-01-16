const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Movie API',
            version: '1.0.0',
            description: 'API documentation for the Movie API',
        },
        basePath: '/api',
    },
    apis: ['./routes/*.js', './controllers/*.js'],
    definitions: {
        Movie: {
            type: 'object',
            properties: {
                title: { type: 'string', example: 'Titanic part 5' },
                year: { type: 'number', example: 2010 },
                image: { type: 'string', example: 'image url' },
            },
        },
    },
};
module.exports = swaggerOptions;