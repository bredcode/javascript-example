class BellmanFord {
  constructor(V, K) {
    this.dist = Array.from({ length: V + 1 }, () => Infinity);
    this.dist[K] = 0;
  }

  start(V, graph) {
    // Edge relaxation을 V-1번 해야합니다.
    // 그러나 우리는 사이클 여부를 판단하기 위해 V-1 + 1번더 = V번 벨만포드 알고리즘을 돌려볼 예정
    // 이때, V번째에도 갱신이 일어난다 ? -> 음수 사이클이 존재한다!
    for (let cnt = 0; cnt < V; cnt++) {
      // 모든 간선에 대해 최단거리를 갱신하는 과정
      console.log("단계 : ", cnt + 1);
      for (let i = 1; i <= V; i++) {
        let [cur, curCost] = [i, this.dist[i]];

        // 시작점부터 2번까지 가는데 최단거리 : dist[2] -> curCost
        // nextCost ? 시작점부터 2번까지 가는데 최단거리 + 2번에서 3번까지 가는데 가중치 = curCost + elem[1]
        // next = 3
        graph[i].forEach((elem) => {
          let [next, nextCost] = [elem[0], elem[1] + curCost];

          if (this.dist[next] > nextCost) {
            this.dist[next] = nextCost;

            if (cnt == V - 1) {
              console.log("Minus Cycle Exists!!");
              return;
            }
          }
        });
      }
    }

    return this.dist;
  }
}

// let [V, E, K] = [5, 6, 1];
// let input = [
//   [5, 1, 1],
//   [1, 2, 2],
//   [1, 3, 3],
//   [2, 3, 4],
//   [2, 4, 5],
//   [3, 4, 6],
// ];

let [V, E, K] = [3, 3, 1];
let input = [
  [1, 2, 1],
  [2, 3, -20],
  [3, 1, 10],
];

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
});

console.log(graph);

const bellmanFord = new BellmanFord(V, K);
let ret = bellmanFord.start(V, graph);
console.log(ret); // dist
