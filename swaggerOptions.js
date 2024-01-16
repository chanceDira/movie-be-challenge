const baseUrl = process.env.BASE_API || 'http://localhost:3000'; 
const swaggerOptions = {
    swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'Movie App',
			version: '1.0.0',
			description:
				'Movie App Backend.',
		},
		servers: [
			{
				// url: 'https://dark-jade-duck-robe.cyclic.app/api',
                url: `${baseUrl}/api`,
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					in: 'header',
					bearerFormat: 'JWT',
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
    apis: ['./routes/*.js', './controllers/*.js'],
};

module.exports = swaggerOptions;