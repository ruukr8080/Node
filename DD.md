> 사용자가 자바스크립트 프로그램을 실행하면 1번과 2번 선택지를 보여준다.

- 숫자만 입력 받을 수 있어야 한다.
- 숫자가 아니거나 숫자더라도 1 또는 2가 아니라면 에러 메시지 출력 후 처음부터 다시 반복한다.
- 입력 받을 때 검증과 에러 메시지가 필요하다

```shell
출력 예시)
기능을 선택해주세요.
1. 사용자 등록
2. 사용자 조회

> 1(엔터)
```

---

## 1. 사용자 등록ㅓㅆ
- 입력 받는 내용은 이름, 나이, 성별을 한번에 하나씩 순서대로 입력받아야 한다.
- 이름은 문자열만 허용
- 나이는 숫자만 허용
- 성별은 문자열이면서 남, 여 둘 중 하나만 허용해야 한다.
- 계속 켜져있어서 상호 작용이 가능해야 하고
- **사용자 정보는 중복 값을 허용**한다.
- **mikro orm**으로 사용자 정보를 사용자 테이블에 저장 후, 저장된 사용자 id 를 출력해주고 0번으로 돌아가서 반복한다.
  _각 항목이 틀리면 **각각의** 에러 메시지를 보여주고 해당 항목을 다시 입력하게 해야한다._

```shell
출력 예시)
사용자 정보를 입력해주세요.
이름: > 데붕(엔터)
나이: > 50(엔터)
성별: > 남(엔터)

저장된 id는 5입니다.
```
> (mikro orm은 jpa같은거고 이번 과제는 사용자 엔티티와 테이블만 필요)

---


## 2. 사용자 조회 **(필터링 조건 있음)**
- 검색 조건 선택 가능: 1. 이름, 나이, 성별
- 해당 값과 mikro orm으로 사용자 테이블을 조회해서 console.log()로 그대로 출력하고 0번으로 돌아간다.

```shell
출력 예시)
조회 조건에 사용할 항목을 선택해주세요.
1. 이름
2. 나이
3. 성별

>2(엔터)

어떤 나이를 조회할까요?

>50(엔터)

[
  {
    "id": 1,
    "name": "데붕",
    "gender": "male"
  },
  ...다른 사용자들
]
```


---
# mikro-orm



>[!note] tsconfig.json
>```js
>{
>"compilerOptions": {
>
>"target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
>"module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
>"allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
>"checkJs": true, // 일반 js 파일에서도 에러체크 여부
>"jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
>"declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
>"outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
>"outDir": "./", //js파일 아웃풋 경로바꾸기
>"rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
>"removeComments": true, //컴파일시 주석제거
>
>"strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
>"noImplicitAny": true, //any타입 금지 여부
>"strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
>"strictFunctionTypes": true, //함수파라미터 타입체크 강하게
>"strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
>"noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
>"alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기
>
>"noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
>"noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
>"noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
>"noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기
>}
>}
>```


---



1. 포스트그레 인메모리
2. 도커 재설치하고 호스트에서 되는지 확인
3. 임포트 최적화 설정해라.( 자동으로 안쓰는거 사라짐.)
4. core는 드라이버  없어서 실제로 작동하려면 드라이버 패키지까지 설치필요한데 왜 그렇게 만들었는지 알아오기
5. 'boolean 함수 만드는법' , 'boolean 변수명 짓기' , 'boolean 함수명 짓기' , 'boolean 함수 만드는법'
6. 입력 검증 역할은 userService 가 아님.
7. promise , async , 
8. early return 패턴

---

- 터미널에서 ubuntu 말고 wsl로 들어가셈
- js로 빌드하고 실행해라. - tsx X 
- nodemon으로 --watch tsc && node dist/index.js를 세팅해라. (**증분 컴파일** (incremental compile)) ts 증분빌드 활성화되면
  dist폴더에 tsconfig.buildinfo 이런 파일이 있을거임





---
- 프로젝트 디폴트 패키지
  - corepack@0.29.3
  - npm@10.8.2

- mikro-orm 설정
  - debug: ['query', 'query-params'] 
  - 콘솔에 쿼리 나온거 그대로 복붙해서 쿼리콘솔에서 사용 가능. [verbose: true] 젤 자세함.
  - `const config: Options{}`  -> `export default defineConfig()`
  - `@mikro-orm/core` 말고 `@mikro-orm/postgresql`로. 패키지에 동일한 함수 가져오면 driver 생략 가능.
  - `orm refresh` === `flyway` 디비 자동생성

- orm refresh


---
`$ docker compose up`



---
- 변수 선언이랑 함수 실행 구분은 빈 줄로.
- 입력받는 함수는 검증도 같이해도 됨.
- 함수 분리시엔 실행 순서를 기준으로 
- 함수에 코드 10줄 안넘어가게 만드셈















