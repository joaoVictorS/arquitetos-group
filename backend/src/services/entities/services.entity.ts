import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'service' })
export class ServicesEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'id_client', nullable: false })
  id_client: number;

  @Column({ name: 'id_arquiteto', nullable: false })
  id_arquiteto: number;

  @Column({ name: 'services', nullable: false })
  services: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.services)
  @JoinColumn({ name: 'id_client', referencedColumnName: 'id' })
  user?: UserEntity[];
}
