// 큐 생성 (Array 사용)
const queue = [];

// 데이터 넣기 (enqueue)
queue.push(5);
queue.push(4);
queue.push(3);
queue.push(2);
queue.push(1);

// 전체 배열 확인
console.log("큐 내용:", queue); // [5, 4, 3, 2, 1]

// 큐 front와 rear 확인
if (queue.length > 0) {
  const front = queue[0];
  console.log("큐 front:", front); // 5 (가장 먼저 들어온 값)
} else {
  console.log("큐가 비어있습니다.");
}

// 데이터 빼기 (dequeue)
console.log("dequeue():", queue.shift()); // 5
console.log("dequeue():", queue.shift()); // 4
console.log("dequeue():", queue.shift()); // 3
console.log("dequeue():", queue.shift()); // 2
console.log("dequeue():", queue.shift()); // 1
console.log("dequeue():", queue.shift()); // undefined (더이상 없음)

// 큐가 비었는지 확인
console.log("isEmpty:", queue.length === 0); // true

// 큐 크기 확인
console.log("size:", queue.length); // 0

idx = 0;

// 데이터 넣기 (enqueue)
queue.push(5);
queue.push(4);
queue.push(3);
queue.push(2);
queue.push(1);

// 데이터 빼기 (dequeue)
console.log("dequeue():", queue[idx++]); // 5
console.log("dequeue():", queue[idx++]); // 4
console.log("dequeue():", queue[idx++]); // 3
console.log("dequeue():", queue[idx++]); // 2
console.log("dequeue():", queue[idx++]); // 1
console.log("dequeue():", queue[idx]); // undefined (더이상 없음)

// 큐가 비었는지 확인
console.log("isEmpty:", idx >= queue.length);

// 큐 크기 확인
console.log("size:", idx - queue.length); // 0
