// import {UserRepository} from "./UserRepository.js";
// import readline from "readline/promises";
//
// // import {userInfo} from "node:os";
//
//
// export class UserService {
//     userRepository = new UserRepository();
//     reader = readline.createInterface(process.stdin, process.stdout);
//
//
//     async featValidation(input) {
//         if (isNaN(input)) {
//             console.error(`${input} nono number please`);
//             return false;
//         }
//         if (1 <= input <= 2) {
//             console.error(`${input} nono  1 or 2 please`);
//             return false;
//         }
//         return true;
//     }
//
//     async userInput() {
//         try {
//             console.clear();
//             const userName = await this.reader.question("name :");
//             // if (userName !== ) {
//             //
//             // }
//             console.clear();
//             const userAge = await this.reader.question("age :");
//             if (isNaN(userAge)) {
//                 throw new Error(`${userAge} nono number please`);
//
//             }
//             console.clear();
//             const userGender = await this.reader.question("gender :");
//             if (userGender !== "M" && userGender !== "F") {
//                 throw new Error(`${userGender} nono "M" or "F" please`);
//             }
//             return {userName, userAge, userGender};
//
//         } catch (e) {
//             throw e.message;
//
//         }
//
//     }
//
//     // async registerUser() {
//     //     const putUser = await this.getUser("name :");
//     //
//     //
//     //     return this.userRepository.saveUser();
//     // }
//     //
//     // async findUser() {
//     //
//     //     return this.userRepository.findUser();
//     // }
// }
