import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
    phone: string

    @Column({name:'gender', nullable:false})
    gender: string

    @Column({name:'age', nullable:false})
    age: number
}