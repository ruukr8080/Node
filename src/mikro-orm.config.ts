import {defineConfig, Options} from '@mikro-orm/postgresql';

export default defineConfig({
    dbName: 'postgres',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'sa',
    entities: ['dist/entities'],
    entitiesTs: ['src/entities/*.ts'],
    allowGlobalContext: true,
    // debug: ['query', 'query-params']
});
