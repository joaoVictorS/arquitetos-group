import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly useRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    return this.useRepository.save({
      ...createUserDto,
      password: passwordHashed,
    });
  }
  async getUserByIdUsingRelations(user_id: number): Promise<UserEntity> {
    return this.useRepository.findOne({
      where: {
        id: user_id,
      },
      relations: ['services'],
    });
  }
  async getAllUser(): Promise<UserEntity[]> {
    return this.useRepository.find();
  }
}
