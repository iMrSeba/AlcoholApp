import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702078512310 implements MigrationInterface {
    name = 'Migrations1702078512310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "image" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "image"`);
    }

}
