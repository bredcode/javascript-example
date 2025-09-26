class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  push(data) {
    this.heap[++this.cnt] = data;

    let cur = this.cnt;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur][1] < this.heap[par][1]) {
      [this.heap[cur], this.heap[par]] = [this.heap[par], this.heap[cur]];

      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.cnt == 0) {
      return null;
    }

    let data = this.heap[1];
    this.heap[1] = this.heap[this.cnt--];

    let cur = 1;
    let child;

    while (1) {
      child = cur * 2;

      if (child < this.cnt && this.heap[child][1] > this.heap[child + 1][1]) {
        child++;
      }

      if (child > this.cnt || this.heap[cur][1] < this.heap[child][1]) {
        break;
      }

      [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];

      cur = child;
    }

    return data;
  }

  empty() {
    return !this.cnt;
  }
}

class Dijkstra {
  start(graph, src, V, E) {
    // 최단거리 테이블을 무한으로 초기화
    let dist = Array.from({ length: V + 1 }, () => Infinity);
    // 시작점->시작점 최단거리는 0
    dist[src] = 0;

    const pq = new PriorityQueue(V + 1);

    pq.push([src, dist[src]]);

    while (!pq.empty()) {
      let [cur, cost] = pq.pop();
      if (dist[cur] < cost) {
        continue;
      }

      graph[cur].forEach((elem) => {
        let [next, nextDist] = [elem[0], cost + elem[1]];
        if (dist[next] > nextDist) {
          dist[next] = nextDist;

          pq.push([next, nextDist]);
        }
      });
    }

    return dist;
  }
}

let [V, E, K] = [5, 6, 1];
let input = [
  [5, 1, 1],
  [1, 2, 2],
  [1, 3, 3],
  [2, 3, 4],
  [2, 4, 5],
  [3, 4, 6],
];

let graph = Array.from({ length: V + 1 }, () => []);
input.forEach((elem) => {
  let [from, to, val] = elem;
  graph[from].push([to, val]);
  // graph[to].push([from, val]);
});

console.log(graph);

const dijkstra = new Dijkstra();
let ret = dijkstra.start(graph, K, V, E);
console.log(ret); // dist
