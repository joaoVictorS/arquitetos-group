import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'service'})
export class ServicesEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column({name:'id_client', nullable:false})
    id_client: number

    @Column({name:'id_arquiteto', nullable:false})
    id_arquiteto: number

    @Column({name:'services', nullable:false})
    services: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({name: 'updated_at'})
    updatedAt:Date;
}