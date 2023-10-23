import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/orm.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true,
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
