import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import {UserRepository} from "../UserRepository.js";

@Entity({repository: () => UserRepository})
export class User {
    @PrimaryKey({ type: 'number', autoincrement: true })
    id!: number;

    @Property({ type: 'string' })
    name!: string;

    @Property({ type: 'number' })
    age!: number;

    @Property({ type: 'string' })
    gender!: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
