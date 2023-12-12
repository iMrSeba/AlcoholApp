import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702165746175 implements MigrationInterface {
    name = 'Migrations1702165746175'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "image" bytea NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "image" character varying NOT NULL`);
    }

}
