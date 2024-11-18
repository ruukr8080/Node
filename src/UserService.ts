import { EntityManager } from '@mikro-orm/postgresql';
// @ts-ignore
import { User } from './entities/User';
// import { UserRepository} from `UserRepository.ts`;


export class UserService {
    constructor(private em: EntityManager) {}

    async featureValidation(input: number): Promise<boolean> {
        if (isNaN(input)) {
            console.error("NaN");
            return false;
        }
        if (input !== 1 && input !== 2) {
            console.error("Only 1, 2");
            return false;
        }
        return true;
    }

    async registerUser(name: string, age: number, gender: string): Promise<number> {
        const user = new User(name, age, gender);
        await this.em.persistAndFlush(user);
        return user.id;
    }

    async findUser(id: number): Promise<User | null> {
        return this.em.findOne(User, { id });
    }
}