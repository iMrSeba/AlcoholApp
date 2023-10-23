
import { DataSourceOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { DataSource } from 'typeorm';

ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true,
})

const DataBaseConfig: DataSourceOptions = {
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPERORM_HOST,
    port: parseInt(process.env.TYPERORM_PORT as string),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [User],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
}

const TestConfig: DataSourceOptions = {
    type: 'sqlite3' as any,
    database: ':memory:',
    dropSchema: true,
    entities: [User],
    synchronize: true,
    logging: false,
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
}

class DataSourceFactory{
    private constructor(){}
  
    static createDataSource(env): DataSourceOptions{
        if(env === 'test'){
            return TestConfig;
        }
        return DataBaseConfig;
    }
}

const DataSourceConfig = DataSourceFactory.createDataSource(process.env.NODE_ENV);

export { DataSourceConfig};

export const AppDS = new DataSource(DataSourceConfig)