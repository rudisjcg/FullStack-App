import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConnectionToken } from '@nestjs/mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dbConnection = app.get(getConnectionToken());
  console.log('Conection Status: ', dbConnection.readyState);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
