import { patchNestJsSwagger } from "nestjs-zod";

import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { swaggerOptions } from "./config/swagger-options";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle(swaggerOptions.title)
    .setDescription(swaggerOptions.description)
    .setVersion(swaggerOptions.version)
    .addBearerAuth()
    .build();

  patchNestJsSwagger();

  const documentFactory = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("/api/docs", app, documentFactory);

  app.enableCors();

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
