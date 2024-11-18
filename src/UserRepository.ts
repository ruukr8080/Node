import { EntityManager } from '@mikro-orm/postgresql';
// @ts-ignore
import { User } from './entities/User.ts';

// @ts-ignore
export class UserRepository extends EntityManager<User> {
    async save(user : User) {
        await this.persist(user).flush();
        return user.id;
    }


    async findUser(id: number) {
        // @ts-ignore
        return this.findOne({id});
    }
}

