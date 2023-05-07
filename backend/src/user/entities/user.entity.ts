import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'user'})
export class UserEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({name:'name', nullable:false})
    name: string

    @Column({name:'email', nullable:false})
    email: string

    @Column({name:'password', nullable:false})
    password: string

    @Column({name:'phone', nullable:false})
    phone: number

    @Column({name:'gender', nullable:false})
    gender: string

    @Column({name:'age', nullable:false})
    age: number

    @Column({name:'type_user', nullable:false})
    type_user: number

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt:Date;
}