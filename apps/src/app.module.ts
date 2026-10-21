import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/shared';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneralModule } from './general/general.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, GeneralModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
