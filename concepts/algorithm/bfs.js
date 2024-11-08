function bfs(graph, visit, start) {
  let queue = [];
  queue.push(start);

  // 큐가 빌때 까지
  while (queue.length) {
    let cur = queue.shift();

    // 만약에 방문 했다면 continue
    if (visit[cur]) {
      continue;
    }

    // 방문 표시
    visit[cur] = 1;
    console.log(cur);

    graph[cur].forEach((next) => queue.push(next));
  }
}

let N = 12;
let M = 13;
let graph = Array.from({ length: M + 1 }, () => {
  return [];
});
let visit = Array.from({ length: M + 1 }, () => 0);

graph[1].push(2);
graph[1].push(3);
graph[1].push(4);
graph[3].push(5);
graph[3].push(6);
graph[5].push(7);
graph[5].push(8);
graph[6].push(9);
graph[9].push(10);
graph[9].push(11);
graph[10].push(12);
graph[10].push(13);

bfs(graph, visit, 1);

// let [N, K] = [5, 17]; // 4, 2

// let minTime = null;
// let timeMap = {};

// let queue = [];
// queue.push([N, 0]);

// while (queue.length) {
//   let [cur, time] = queue.shift();

//   // 문제의 조건에 의한 휴리스틱
//   if (cur < 0 || cur > 10000) {
//     continue;
//   }

//   // 최소시간을 만족하지 못하는데 더 탐색할 필요가 없다에 대한 휴리스틱
//   if (minTime != null && time > minTime) {
//     continue;
//   }

//   if (cur == K) {
//     minTime = time;

//     if (!timeMap.hasOwnProperty(minTime)) {
//       timeMap[minTime] = 0;
//     }
//     timeMap[minTime]++;
//   }

//   // 영수가 위치가 1 -> 철수가 2에 있다.
//   queue.push([cur - 1, time + 1]);
//   queue.push([cur + 1, time + 1]);
//   queue.push([cur * 2, time + 1]);
// }

// console.log(minTime, timeMap[minTime]);
