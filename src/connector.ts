import { MikroORM } from '@mikro-orm/core';
import config from './mikro-orm.config.js';


async function connectDB() {
    try {
        const orm = await MikroORM.init(config);
        console.log('Database connected');
        return orm;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

connectDB();