// import { EntityManager } from '@mikro-orm/postgresql';
//
// export class UserRepository {
// //생성자 매개변수에서 해주는게 관례
//     constructor() {
//         this.usersMap = new Map();
//         this.currentUsersMapId = 1;
//     }
//
//     async saveUser(userData) {
//         const id = this.currentUsersMapId++;
//         const user = {
//             id: id,
//             name: userData.name,
//             age: userData.age,
//             gender: userData.gender,
//         };
//
//         this.usersMap.set(id, user);
//         console.log(`Welcome ${user}!`)
//         return id;
//     };
//
//     async findAll() {
//         const userList = [];
//         console.log(`==List==`)
//         if (this.usersMap.length === 0) {
//             return console.log(`NOTHING`);
//         }
//         for (const [id, userData] of this.usersMap) {
//             userList.push(userData);
//         }
//         return console.log(`${userList.get}`);
//     }
//
//     async findByUserName(name) {
//
//         return console.log(`==${name} Data==`)
//
//         // let userList = await this.usersMap.get(name);
//     }
//
//     async findByUserAge(age) {
//         return  console.log(`=="${age}" list==`)
//
//     }
//
//     async findByUserGender(gender) {
//         return  console.log(`==${gender} list==`)
//     }
// }
