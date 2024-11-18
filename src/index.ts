// @ts-ignore
import readline from 'readline/promises';
import { MikroORM } from '@mikro-orm/postgresql';
// @ts-ignore
import { UserService } from "./UserService";
// @ts-ignore
import config from './mikro-orm.config';

const reader = readline.createInterface(process.stdin, process.stdout);

async function run() {
    const orm = await MikroORM.init(config);
    const em = orm.em.fork();
    const userService = new UserService(em);

    while (true) {
        const feature = await selectFeature();
        console.log(`${feature}를 선택하셨습니다.`);

        if (!await userService.featureValidation(feature)) {
            continue;
        }

        if (feature === 1) {
            const name = await reader.question("이름을 입력하세요: ");
            const age = parseInt(await reader.question("나이를 입력하세요: "));
            const gender = await reader.question("성별을 입력하세요: ");

            const id = await userService.registerUser(name, age, gender);
            console.log(`사용자가 등록되었습니다. ID: ${id}`);
            continue;
        }

        if (feature === 2) {
            const id = parseInt(await reader.question("조회할 ID를 입력하세요: "));
            const user = await userService.findUser(id);
            console.log("조회 결과:", user);
            continue;
        }

        break;
    }

    await orm.close();
    reader.close();
}

async function selectFeature(): Promise<number> {
    const input = await reader.question(
        "프로그램이 시작되었습니다.\n" +
        "기능을 선택해주세요.\n" +
        "1. 사용자 등록\n" +
        "2. 사용자 조회\n" +
        ">"
    );
    return parseInt(input);
}

run().catch(console.error);