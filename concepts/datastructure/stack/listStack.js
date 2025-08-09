// 스택 생성 (Array 사용)
const stack = [];

// 데이터 넣기 (push)
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

// 전체 배열 확인
console.log("스택 내용:", stack); // [5, 4, 3, 2, 1]

// 스택 top 확인하기
if (stack.length > 0) {
  const top = stack[stack.length - 1];
  console.log("스택 top:", top); // 1
} else {
  console.log("스택이 비어있습니다.");
}

// 데이터 빼기 (pop)
console.log("pop():", stack.pop()); // 1
console.log("pop():", stack.pop()); // 2
console.log("pop():", stack.pop()); // 3
console.log("pop():", stack.pop()); // 4
console.log("pop():", stack.pop()); // 5
console.log("pop():", stack.pop()); // undefined (더이상 없음)

// 스택이 비었는지 확인
console.log("isEmpty:", stack.length === 0); // true

// 스택 크기 확인
console.log("size:", stack.length); // 0
