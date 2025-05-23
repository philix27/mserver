import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ApplicationModule } from './modules/app.module';
import {
    CommonModule,
    GraphQLExceptionFilter,
    LogInterceptor,
} from './modules/common';

/**
 * These are API defaults that can be changed using environment variables,
 * it is not required to change them (see the `.env.example` file)
 */
const PORT = process.env.PORT || 3000;
const SWAGGER_STATE =
    !process.env.SWAGGER_ENABLE || process.env.SWAGGER_ENABLE === '1';
const API_DEFAULT_PREFIX = '/api/v1/';
const API_PREFIX = process.env.API_PREFIX || API_DEFAULT_PREFIX;
/**
 * The defaults below are dedicated to Swagger configuration, change them
 * following your needs (change at least the title & description).
 *
 * @todo Change the constants below following your API requirements
 */
const SWAGGER_TITLE = 'Passenger API';
const SWAGGER_DESCRIPTION = 'API used for passenger management';
const SWAGGER_PREFIX = '/docs';

/**
 * Register a Swagger module in the NestJS application.
 * This method mutates the given `app` to register a new module dedicated to
 * Swagger API documentation. Any request performed on `SWAGGER_PREFIX` will
 * receive a documentation page as response.
 *
 * @todo See the `nestjs/swagger` NPM package documentation to customize the
 *       code below with API keys, security requirements, tags and more.
 */
function createSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
        .setTitle(SWAGGER_TITLE)
        .setDescription(SWAGGER_DESCRIPTION)
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(SWAGGER_PREFIX, app, document);
}

/**
 * Build & bootstrap the NestJS API.
 * This method is the starting point of the API; it registers the application
 * module and registers essential components such as the logger and request
 * parsing middleware.
 */
async function bootstrap(): Promise<void> {
    const app = await NestFactory.create<NestFastifyApplication>(
        ApplicationModule,
        new FastifyAdapter(),
        // { cors: true }
    );

    // @todo Enable Helmet for better API security headers

    app.setGlobalPrefix(API_PREFIX);

    if (SWAGGER_STATE) {
        createSwagger(app);
    }

    const logInterceptor = app.select(CommonModule).get(LogInterceptor);
    app.useGlobalInterceptors(logInterceptor);
    const allowedOrigins = [
        'https://tg.mobarter.com',
        'https://preview.mobarter.com',
        'https://minipay.mobarter.com',
        'https://admin.mobarter.com',
        'https://app.mobarter.com',
        'https://server.mobarter.com',
    ];

    app.enableCors({
        origin:
            process.env.NODE_ENV === 'development'
                ? '*'
                : (origin, callback) => {
                      if (!origin) {
                          // Allow requests with no origin (like mobile apps, curl, etc.)
                          return callback(null, true);
                      }
                      if (allowedOrigins.includes(origin)) {
                          return callback(null, true);
                      }
                      return callback(new Error('Not allowed by CORS'));
                  },
        methods: 'GET,HEAD,POST', // Allowed methods
        allowedHeaders: 'Content-Type, Authorization', // Allowed headers
        credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    });

    app.useGlobalFilters(new GraphQLExceptionFilter());
    console.log('Listening on port: ' + PORT);
    await app.listen(PORT, '0.0.0.0');
    // await app.listen(PORT);
}

/**
 * It is now time to turn the lights on!
 * Any major error that can not be handled by NestJS will be caught in the code
 * below. The default behavior is to display the error on stdout and quit.
 *
 * @todo It is often advised to enhance the code below with an exception-catching
 *       service for better error handling in production environments.
 */
bootstrap().catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);

    const defaultExitCode = 1;
    process.exit(defaultExitCode);
});
