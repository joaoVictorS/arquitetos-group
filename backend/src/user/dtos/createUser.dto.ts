import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  gender: string;

  @IsString()
  password: string;

  @IsNumber()
  phone: number;

  @IsNumber()
  age: number;

  @IsNumber()
  type_user: number;
}
