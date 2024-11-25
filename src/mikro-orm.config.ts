import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const config: Options = {
    driver: PostgreSqlDriver,
    dbName: 'postgres',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'sa',
    // entities: ['dist/entities'],
    entities: ['src/entities/*.ts'],
    allowGlobalContext: true,
    // debug : true,
};

export default config;
