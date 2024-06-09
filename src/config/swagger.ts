import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Setup Swagger.
 * @param {any} app - The app.
 * @return {void}
 */
export function setupSwagger(app) {
  const options = new DocumentBuilder()
    .setTitle('K Moment TEST')
    .setDescription('FOR K Moment TEST')
    .setVersion('1.0')
    .addTag('k-moment')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
