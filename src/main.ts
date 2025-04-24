import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "https://class-portfolio-tau.vercel.app/",
    credentials: true,
  });
  await app.listen(process.env.PORT || 5161);
}

bootstrap();