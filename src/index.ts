import "reflect-metadata";

import readline from 'readline/promises';
import {MikroORM} from '@mikro-orm/core';
import {UserService} from "./UserService.js";
import config from './mikro-orm.config.js';
import {User} from "./entities/User.js";
import {UserRepository} from "./UserRepository.js";

const reader = readline.createInterface(process.stdin, process.stdout);


async function run() {
    const orm = await MikroORM.init(config);
    // const em= orm.em.fork();
    const em = orm.em;
    const userService = new UserService(new UserRepository(em));
    console.log(`프로그램이 시작되었습니다.\n기능을 선택해주세요.\n`)
    while (true) {
        const feature = await selectFeature();
        if (feature >> 2) {
            console.log(`[${feature}] nono \n only 1 , 2`);
        }
        console.log(`${feature}를 선택하셨습니다.`);
        console.clear();
        if (!await userService.featureValidation(feature)) {
            continue;
        }
        if (feature === 1) {
            console.clear();
            const name = await reader.question("이름을 입력하세요: \n >");

            let ageInput = parseInt(await reader.question(`나이를 입력하세요:\n[나이는 숫자여야하고,/ 0이 아니어야하고 / 200 미만이여야함]\n >`));
            while (!ageInput || ageInput > 200 || ageInput < 0) {
                console.error(`${""+ageInput} ;;;`);
                ageInput = parseInt(await reader.question(`나이 다시: \n >`));
            }
            let age = ageInput;

            let gender = '';
            let genderInput = parseInt(await reader.question(`성별을 입력하세요: [남 = 1 | 여 = 2]`));
            while (genderInput > 2 || !genderInput) {
                genderInput = parseInt(await reader.question(`성별 다시: [남 = 1 | 여 = 2]\n>`));
            }
            if (genderInput === 1) {
                gender = '남자';
            } else {
                gender = '여자';
            }

            const id = await userService.registerUser(name, age, gender);
            console.log(`사용자가 등록되었습니다. ID: ${id}`);
            if (!await userService.registerValidation(name, age, gender)) {
                continue;
            }
            continue;
        }

        if (feature === 2) {
            console.clear();
            console.log("choose 조회 MODE \n" +
                "1. find by id \n" +
                "2. find by name \n" +
                "3. find by age \n" +
                "4. find by gender \n");
            const findFeature = parseInt(await reader.question("\n>"));
            if (findFeature === 1) {
                const id = parseInt(await reader.question("조회할 ID를 입력하세요: "));
                const user = await userService.findUser(id);
                console.log("조회 결과:\n> ", user, "\n\n\n");
                continue;
            }
            if (findFeature === 2) {
                const name = await reader.question("조회할 name 입력하세요: ");
                const user = await userService.findByName(name);
                console.clear();
                console.log(`조회 결과:\n   ${user?.name} 님_(${user?.age}세)(${user?.gender})`);
                continue;
            }
            if (findFeature === 3) {
                console.log("조회할 ages :")
                const minAge = parseInt(await reader.question(` 최소 나이 :`));
                const maxAge = parseInt(await reader.question(` 최대 나이 :`));
                const users = await userService.findByAge(minAge, maxAge);
                console.clear();
                console.log(`검색 결과 (${users.length}명):`);
                users.forEach((user) => {
                    console.log(`\n[${user.age}세]  ${user.name}(${user.gender})님`);
                })
                continue;
            }
            if (findFeature === 4) {
                let genderInput = parseInt(await reader.question(`성별을 입력하세요: \n 남자 = 1번 \n 여자 = 2번`));
                while (genderInput > 2 || !genderInput) {
                    await reader.question(`성별 다시: [남 = 1 | 여 = 2]\n>`);
                }
                let gender = '';
                if (genderInput === 1) {
                    gender = '남자';
                } else if (genderInput === 2) {
                    gender = '여자';
                }
                const user = await userService.findByGender(gender);
                console.log("조회 결과:\n> ", user, "\n\n\n");
                continue;
            }
            // console.log("조회 결과:", user);
        }
        break;
    }
    await orm.close();
    reader.close();
}

async function selectFeature(): Promise<number> {
    const input = await reader.question(
        "1. 사용자 등록\n" +
        "2. 사용자 조회\n" +
        ">"
    );
    return parseInt(input);
}

run().catch(console.error);
