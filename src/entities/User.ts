import {Entity, PrimaryKey, Property} from '@mikro-orm/core';

@Entity()
export class User {
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    age!: number;

    @Property()
    gender!: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}