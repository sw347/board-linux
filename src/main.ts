import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://222.110.147.50:3342",
    credentials: true,
  });
  await app.listen(process.env.PORT || 5161);
}

bootstrap();