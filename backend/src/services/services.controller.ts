import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesEntity } from './entities/services.entity';

@Controller('services')
export class ServicesController {
  constructor(
    private readonly serviceServices: ServicesService,
  ){}

  @Get()
  async getAllServices():Promise<ServicesEntity[]>{
    return this.serviceServices.getAllServices();
  }
}
