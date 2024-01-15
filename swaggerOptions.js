const swaggerOptions = {
    // swaggerDefinition: {
    //     info: {
    //         title: 'Movie API',
    //         version: '1.0.0',
    //         description: 'API documentation for the Movie API',
    //     },
    //     basePath: '/api',
    // },
    // apis: ['./routes/*.js', './controllers/*.js'],
    // definitions: {
    //     Movie: {
    //         type: 'object',
    //         properties: {
    //             title: { type: 'string', example: 'Titanic part 5' },
    //             year: { type: 'number', example: 2010 },
    //             image: { type: 'string', example: 'image url' },
    //         },
    //     },
    // },

    definition: {
        openapi: "3.0.0",
        info: {
          title: "Library API",
          version: "1.0.0",
          description: "A simple Express Library API",
          termsOfService: "http://example.com/terms/",
          contact: {
            name: "API Support",
            url: "http://www.exmaple.com/support",
            email: "support@example.com",
          },
        },
        servers: [
          {
            url: "https://nodejs-swagger-api.vercel.app/",
            description: "My API Documentation",
          },
        ],
      },
      // This is to call all the file
      apis: ['./routes/*.js', './controllers/*.js'],
};

module.exports = swaggerOptions;