import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702068431600 implements MigrationInterface {
    name = 'Migrations1702068431600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
    }

}
