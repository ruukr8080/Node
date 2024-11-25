import type {User} from './entities/User.js';
import {EntityManager, EntityRepository, Transactional} from "@mikro-orm/core";


export class UserRepository extends EntityRepository<User>  {

    constructor(readonly em: EntityManager) {
        super(em, 'User')
    }

    @Transactional()
    async save(user: User) {
        this.em.persist(user);
    }

    async findByAges(minAge: number, maxAge: number): Promise<User[]> {
        return this.find({
            age: {$gte: minAge, $lte: maxAge}});
    }

    async findByGenders(gender: string): Promise<User[]> {
        return this.find({gender: {$like: gender}});
    }
}

