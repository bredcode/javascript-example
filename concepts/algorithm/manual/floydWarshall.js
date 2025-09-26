let [V, E] = [5, 11];
let input = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
  [3, 1, 8],
  [5, 1, 7],
  [5, 2, 4],
];

let graph = Array.from({ length: V + 1 }, () =>
  Array.from({ length: V + 1 }, () => Infinity)
);

input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from][to] = val;
});

for (let i = 1; i <= V; i++) {
  graph[i][i] = 0;
}

console.log(graph);

// 경유지
for (let k = 1; k <= V; k++) {
  // 시작점
  for (let x = 1; x <= V; x++) {
    // 도착점
    for (let y = 1; y <= V; y++) {
      if (graph[x][y] > graph[x][k] + graph[k][y]) {
        graph[x][y] = graph[x][k] + graph[k][y];
      }
    }
  }
}

console.log(graph);
