import {User} from './entities/User.js';
import {UserRepository} from "./UserRepository.js";


export class UserService {
    constructor(private readonly userRepository: UserRepository) {
    }

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

    async registerValidation(name: string, age : number, gender: string): Promise<boolean> {
        if (isNaN(age)) {
            console.error("NaN");
            return false;
        }
        if(age>200){
            console.error("200 이상 x");
            return false;
        }
        if (gender !== "남자" && gender !== "여자") {
            console.error("Only 1, 2");
            return false;
        }
        return true;
    }

    async registerUser(name: string, age: number, gender: string): Promise<number> {
        const user = new User(name, age, gender);
        await this.userRepository.save(user);
        return user.id;
    }

    //id로 조회 / 이름으로 조회 == id로 조회/ 나이로 조회 == 조회 후 배열에 담아서 출력 / 성별로 조회 = 조회 후 배열 담아서 출력
    async findUser(id: number): Promise<User | null> {
        return this.userRepository.findOne({id});
    }

    async findByName(name: string): Promise<User | null> {
        return this.userRepository.findOne({name});
    }

    async findByAge(minAge: number, maxAge: number): Promise<User[]> {

        return this.userRepository.findByAges(minAge, maxAge);
    }

    async findByGender(gender: any): Promise<User[]> {

        return this.userRepository.findByGenders(gender);
    }
}
