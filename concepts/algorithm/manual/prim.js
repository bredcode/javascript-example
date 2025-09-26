class PriorityQueue {
  constructor(size) {
    this.heap = Array.from({ length: size }, () => 0);
    this.cnt = 0;
  }

  print() {
    console.log("=== heap ===");
    console.log(this.heap);
  }

  // data -> [to, val]
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

class Prim {
  constructor(N) {
    this.visit = Array.from({ length: N + 1 }, () => 0);
    this.pq = new PriorityQueue(N + 1);
    this.cost = 0;
  }

  getMST(start, graph) {
    this.visit[start] = 1;

    graph[start].forEach((elem) => {
      let [next, nextCost] = elem;
      this.pq.push([next, nextCost]);
    });

    while (!this.pq.empty()) {
      let [cur, curCost] = this.pq.pop();

      if (this.visit[cur]) {
        continue;
      }

      this.visit[cur] = 1;
      this.cost += curCost;

      graph[cur].forEach((elem) => {
        let [next, nextCost] = elem;
        this.pq.push([next, nextCost]);
      });
    }

    return this.cost;
  }
}

let [N, M] = [6, 9];
let input = [
  // from, to , val 순서
  [1, 2, 5],
  [1, 3, 4],
  [2, 3, 2],
  [2, 4, 7],
  [3, 4, 6],
  [3, 5, 11],
  [4, 5, 3],
  [4, 6, 8],
  [5, 6, 8],
];

let graph = Array.from({ length: N + 1 }, () => []);
console.log(graph);

input.forEach((elem) => {
  let [from, to, val] = elem;

  graph[from].push([to, val]);
  graph[to].push([from, val]);
});
console.log(graph);

const prim = new Prim(N);
let mstCost = prim.getMST(1, graph);
console.log(mstCost);
