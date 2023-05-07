import { Injectable } from '@nestjs/common';
import { ServicesEntity } from './entities/services.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(ServicesEntity)
        private readonly servicesRepository: Repository<ServicesEntity>,
    ){}

    async getAllServices(): Promise<ServicesEntity[]>{
      return this.servicesRepository.find();
    }
}
