import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { ResourcesModule } from "./resources/resources.module";

@Module({
  imports: [PrismaModule, ResourcesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
