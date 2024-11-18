import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const config: Options = {
    driver: PostgreSqlDriver,
    dbName: 'postgres',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'sa',
    entities: [`./entities/User`], // 엔티티 위치
    entitiesTs: [`./entities/User`], // TypeScript 엔티티 위치
};

export default config;