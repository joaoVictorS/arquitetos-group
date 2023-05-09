import { ServicesEntity } from 'src/services/entities/services.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'gender', nullable: false })
  gender: string;

  @Column({ name: 'type_user', nullable: false })
  type_user: number;

  @Column({ name: 'age', nullable: false })
  age: number;

  @Column({ name: 'phone', nullable: false })
  phone: number;

  @Column({ name: 'password', nullable: false })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => ServicesEntity, (services) => services.user)
  services?: ServicesEntity[];
}
