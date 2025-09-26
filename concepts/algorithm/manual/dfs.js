function dfs(graph, visit, cur) {
  if (visit[cur]) {
    return;
  }

  visit[cur] = 1;
  console.log(cur);
  graph[cur].forEach((next) => dfs(graph, visit, next));
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

dfs(graph, visit, 1);

// function dfs(N, M, ans) {
//   if (ans.length == M) {
//     console.log(ans); // [1, 2]
//     return;
//   }

//   for (let i = 1; i <= N; i++) {
//     ans.push(i); // [1, 2]
//     dfs(N, M, ans);
//     ans.pop();
//   }
// }
// // 1~4까지의 자연수 중에서 2개를 뽑아 수열을 만들어 달라
// // ex: 11, 12, 13, 14 ~ 41,42,43,44
// let [N, M] = [4, 2];

// dfs(N, M, []);
