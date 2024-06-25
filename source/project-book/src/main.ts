import { NestFactory } from '@nestjs/core';
import { BookModule } from './book.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(BookModule);

  const config = new DocumentBuilder()
  .setTitle('Api books')
  .setDescription('API Books created by ciceroednilson@gmail.com')
  .setVersion('1.0')
  .addTag('book')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, function() {
    Logger.log("LISTEN PORT: 3000")
  });
}
bootstrap();
