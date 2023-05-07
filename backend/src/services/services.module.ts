import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesEntity } from './entities/services.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServicesEntity])],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServiceModule {}
