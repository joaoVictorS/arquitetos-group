import { Body, Controller, Get, Post } from '@nestjs/common';
import {CreateUserDto} from './dtos/createUser.dto'

@Controller('user')
export class UserController {
  @Post()
  async getAllUsers(
    @Body() createUser: CreateUserDto
  ) {
    return createUser;
  }
}
