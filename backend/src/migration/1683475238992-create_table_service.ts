import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableService1683475238992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE public.service(
                id integer NOT NULL,
                id_client int NOT NULL,
                id_arquiteto int NOT NULL,
                services text  NOT NULL,
                created_at timestamp without time zone default now() NOT NULL,
                updated_at timestamp without time zone default now() NOT NULL,
                primary key (id)
            );

            CREATE SEQUENCE public.service_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;

            ALTER SEQUENCE public.service_id_seq OWNED BY public.service.id;

            ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT nextval('public.service_id_seq'::regClass);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            drop table public.service;
        `)
    }

}
