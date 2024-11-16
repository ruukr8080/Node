import {UserService} from "./UserService.js";
import readline from "readline/promises";

const userService = new UserService();
const reader = readline.createInterface(process.stdin, process.stdout);


const run = async () => {

    while (true) {
        // const input = await reader.question();

        const feature = await selectFeature();
        // console.log(`${feature}를 선택하셨습니다.`)
        if (feature === 1) {
            console.log(`${feature}를 선택하셨습니다.`)
            const id = await userService.registerUser();
            if (id === undefined) {
                console.log(`user registered  :: ${id}`);
            }
            // await ();
            continue;
        }
        if (feature === 2) {
            console.clear()
            console.log(`${feature}를 선택하셨습니다.`)
            const findUserFeatures = await reader.question("0. findAll \n"
                + "2. findByUserName \n"
                + "3. findByUserAge \n"
                + "3. findByUserGender \n"
            );
            if (0 <= findUserFeatures <= 4) {
                if (findUserFeatures === 0) {
                    console.clear()
                    console.log(`${findUserFeatures}를 선택하셨습니다.`)
                    await userService.findAll();
                }
                if (findUserFeatures === 2) {
                    console.clear()
                    console.log(`${findUserFeatures}를 선택하셨습니다.`)
                    await userService.findByUserName();
                }
                if (findUserFeatures === 3) {
                    console.clear()
                    console.log(`${findUserFeatures}를 선택하셨습니다.`)
                    await userService.findByUserAge();
                }
                if (findUserFeatures === 4) {
                    console.clear()
                    console.log(`${findUserFeatures}를 선택하셨습니다.`)
                    await userService.findByUserGender();
                }

            }
            await nextStage();
            continue;
        }
        if (feature === 3) {
            console.log(`Dead 하셨습니다.`)
            break;
        }
        reader.close()
    }
};

const selectFeature = async () => {
    const input = await reader.question(
        "프로그램이 시작되었습니다.\n"
        + "기능을 선택해주세요.\n"
        + "1. 사용자 등록\n"
        + "2. 사용자 조회\n"
        + "3. DEAD \n"
        + ">"
    );
    const feature = parseInt(input);
    return feature;
};


const nextStage = async () => {
    console.log(`\n go?`);
    await reader.question(`\n`);
};


run();


