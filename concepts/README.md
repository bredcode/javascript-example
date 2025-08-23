### Javascript Coding Test Tip

자바스크립트(JavaScript)로 코딩 테스트를 볼 때, 효율적으로 문제를 해결하기 위한 몇 가지 팁

1. 입출력 처리 빠르게 하기  
   코딩 테스트 플랫폼마다 입력방식이 다르므로, 입력 예시와 설명을 꼼꼼히 읽고 처리 방법을 익혀야 합니다.

   Node.js 사용하는 경우:

   ```javascript
   // 여러 줄 입력받기 (예시)
   const fs = require("fs");
   const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
   ```

   VS Code 등에서 테스트할 땐 input.txt 파일로 바꿔서 사용

2. 자료구조와 내장 함수 적극 활용  
   배열 메서드: `map, filter, reduce, sort, forEach` 등을 문제에 따라 효율적으로 사용

   `Set, Map`으로 중복 제거·빠른 탐색 구현

   문자열 처리 메서드: `split, join, substring, replace`

3. for문과 for…of/for…in 구분  
   배열 요소를 반복할 때는 `for...of`를 권장함.

   ```javascript
   for (const num of arr) { ... }
   ```

   인덱스가 필요하면 전통적인 for문 또는 forEach 사용

4. 시간 복잡도와 효율성 신경쓰기  
   복잡도를 고민하지 않고 그냥 문제를 푸는 건,  
   내가 무슨생각으로 푸는지 모르는 상황과 동일

   또한, 내장 함수 활용 시, `시간 복잡도` 분석 꼭 해보기

5. 연습이 필요한 주제
   정렬, 해시맵(객체/Map), BFS/DFS(큐/재귀), 이진 탐색 등 자주 나오는 알고리즘을 미리 연습

   각 자료구조의 특성(삽입/삭제/탐색) 이해

6. 테스트 케이스 직접 만들어 확인하기
   `잘못된 케이스(엣지 케이스)` 상상하며 검증

7. 함수형 스타일로 문제해결 익히기
   조건문, 반복문을 너무 길게 쓰지 않고 `map/filter/reduce` 등 이용

8. 틀렸을 때 디버깅 팁
   `console.log`로 변수/과정 확인  
   (생각만이 아닌 로그를 직접 찍어보자!)

---

코드 실전 팁

1.  화살표 함수 (Arrow Function)  
    간결한 함수 표현식, function 대신 사용

    본문이 한 줄일 때는 중괄호와 return 생략 가능

    ```javascript
    // 일반 함수
    function add(x, y) {
      return x + y;
    }

    // 화살표 함수
    const addArrow = (x, y) => x + y;

    console.log(add(3, 4)); // 7
    console.log(addArrow(3, 4)); // 7
    ```

2.  비구조화 할당 (Destructuring Assignment)  
    객체나 배열에서 값을 쉽게 꺼내기

    ```javascript
    // 배열 비구조화
    const arr = [10, 20, 30];
    const [first, second] = arr;
    console.log(first, second); // 10 20

    // 객체 비구조화
    const obj = { name: "Alice", age: 25 };
    const { name, age } = obj;
    console.log(name, age); // Alice 25
    ```

    ```javascript
    const { age: userAge } = obj; // obj의 age를 userAge라는 변수명으로 가져옴
    console.log(userAge); // 25
    ```

3.  const와 let 활용  
    const: 재할당 불가, 상수 선언(객체/배열 요소 변경 가능)

    let: 재할당 가능, 블록 스코프 변수 선언

    var 대신 const와 let을 쓰자

    ```javascript
    const a = 10;
    // a = 20; // Error: 재할당 불가

    let b = 5;
    b = 15; // 가능

    if (true) {
      let c = 30;
      // var d = 40;
    }
    // c는 여기서 접근 불가 (블록 스코프)
    // d는 함수 내라면 접근 가능 (var는 함수 스코프)
    ```

4.  템플릿 문자열 (Template Literals)
    백틱(`)

    여러 줄 문자열도 쉽게 작성

    ```javascript
    const name = "Tom";
    const greeting = `Hello, ${name}!`;
    console.log(greeting); // Hello, Tom!

    const multiLine = `첫째 줄
    둘째 줄
    셋째 줄`;
    console.log(multiLine);
    ```

5.  Spread 연산자, Rest 파라미터  
     배열이나 객체를 펼치기, 복사, 병합 등에 사용

    ```javascript
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const merged = [...arr1, ...arr2];
    console.log(merged); // [1, 2, 3, 4]

    function sum(...args) {
      return args.reduce((acc, v) => acc + v, 0);
    }
    console.log(sum(1, 2, 3)); // 6
    ```

    ❓ 이렇게 하면 출력이 뭐가 나올까?

    ```javascript
    const arrA = [
      [1, 2],
      [3, 4],
    ];
    const arrB = [...arrA];

    arrB[0][0] = 100;

    console.log(arrA);
    console.log(arrB);
    ```

    <details>
    <summary>정답 접기/펼치기</summary>

    ```json
    [ [100, 2], [3, 4] ]
    [ [100, 2], [3, 4] ]
    ```

    자바스크립트에서 `Spread 연산자(...)`는 깊은 복사(Deep Copy)를 완벽하게 해주지는 않습니다.

    정확히는, Spread 연산자는 1단계(depth) 깊이에서만 **깊은 복사(Deep Copy)** 를 수행하고, 그 안에 중첩된 객체나 배열 등 복합 자료형은 원본과 같은 참조를 공유합니다.  
    즉, **얕은 복사(Shallow Copy)** 를 합니다.

    **깊은 복사를 하려면?**

    - JSON 방식 (단순 객체에 한함, 함수, undefined 등은 제외)

    ```javascript
    const deepCopy = JSON.parse(JSON.stringify(original));
    ```

    - 재귀 함수 이용

    - lodash 라이브러리의 `cloneDeep` 함수 사용

    ```javascript
    const { cloneDeep } = require("lodash");
    const deepCopy = cloneDeep(original);
    ```

    📌 코딩 테스트에서는 라이브러리 사용이 힘드니 `JSON 방식`을 사용해보자!

    </details>

6.  배열 생성 예제

    1.  1차원 배열  
        5개를 0으로 초기화하기
        ```javascript
        const size = 5;
        const arr1d = Array(size).fill(0);
        console.log(arr1d); // [0, 0, 0, 0, 0]
        ```
    2.  2차원 배열  
        3x4 크기에 0으로 초기화하기
        ```javascript
        const rows = 3;
        const cols = 4;
        const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
        console.log(matrix);
        /*
        [
         [0, 0, 0, 0],
         [0, 0, 0, 0],
         [0, 0, 0, 0]
        ]
        */
        ```
    3.  3차원 배열  
        ❓`3x4x2` 크기의 3차원 배열을 0으로 초기화하는 코드를 작성해보세요.

         <details> 
         <summary>정답 접기/펼치기</summary>

        ```javascript
        const depth = 3; // 가장 바깥 배열 크기
        const rows = 4; // 두 번째 배열 크기
        const cols = 2; // 가장 안쪽 배열 크기

        const matrix3d = Array.from({ length: depth }, () =>
          Array.from({ length: rows }, () => Array(cols).fill(0))
        );

        console.log(matrix3d);
        /*
        [
            [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
            ],
            [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
            ],
            [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0]
            ]
        ]
        */
        ```

         </details>
