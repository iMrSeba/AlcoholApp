import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1702166665570 implements MigrationInterface {
    name = 'Migrations1702166665570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "image" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "image" SET NOT NULL`);
    }

}
